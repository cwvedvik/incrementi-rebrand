import { NextResponse } from "next/server";

const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID?.trim();
const HUBSPOT_FORM_GUID = process.env.HUBSPOT_FORM_GUID?.trim();

type Lead = {
  name: string;
  company: string;
  email: string;
  message: string;
  at: string;
};

function readCookie(request: Request, name: string): string | undefined {
  const header = request.headers.get("cookie");
  if (!header) return undefined;
  for (const part of header.split(";")) {
    const [key, ...rest] = part.trim().split("=");
    if (key === name) return decodeURIComponent(rest.join("="));
  }
  return undefined;
}

function optionalString(value: unknown, max: number): string | undefined {
  return typeof value === "string" && value.length > 0 && value.length <= max
    ? value
    : undefined;
}

async function submitToHubSpot(
  lead: Lead,
  context: { hutk?: string; pageUri?: string; pageName?: string }
): Promise<void> {
  const [firstname, ...rest] = lead.name.split(/\s+/);
  const fields = [
    { name: "firstname", value: firstname },
    { name: "lastname", value: rest.join(" ") },
    { name: "email", value: lead.email },
    { name: "company", value: lead.company },
    { name: "message", value: lead.message },
  ]
    .filter((f) => f.value)
    .map((f) => ({ objectTypeId: "0-1", ...f }));

  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        submittedAt: Date.parse(lead.at),
        fields,
        context,
      }),
      signal: AbortSignal.timeout(8000),
    }
  );

  if (!res.ok) {
    throw new Error(`HubSpot ${res.status}: ${await res.text()}`);
  }
}

/**
 * Contact endpoint. Validates the lead and submits it to HubSpot through the
 * Forms API, linking it to the visitor's `hubspotutk` cookie when present.
 * Every lead is also logged to the Vercel function logs so nothing is lost
 * if HubSpot is unreachable or not configured (local dev, previews).
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, company, email, message, pageUri, pageName } = (body ??
    {}) as Record<
    string,
    unknown
  >;

  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return NextResponse.json(
      { error: "A valid email is required" },
      { status: 400 }
    );
  }
  if (typeof message === "string" && message.length > 5000) {
    return NextResponse.json({ error: "Message too long" }, { status: 400 });
  }

  const lead: Lead = {
    name: name.trim(),
    company: typeof company === "string" ? company.trim() : "",
    email: email.trim(),
    message: typeof message === "string" ? message.trim() : "",
    at: new Date().toISOString(),
  };

  console.log("[incrementi] new lead:", JSON.stringify(lead));

  if (HUBSPOT_PORTAL_ID && HUBSPOT_FORM_GUID) {
    try {
      await submitToHubSpot(lead, {
        hutk: readCookie(request, "hubspotutk"),
        pageUri: optionalString(pageUri, 2000),
        pageName: optionalString(pageName, 500),
      });
    } catch (err) {
      console.error("[incrementi] HubSpot submission failed:", err);
      return NextResponse.json(
        { error: "Could not submit lead" },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}
