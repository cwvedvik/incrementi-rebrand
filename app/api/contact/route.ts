import { NextResponse } from "next/server";

/**
 * Contact endpoint. Validates and accepts the lead.
 *
 * Wiring options (pick one before launch):
 *  - Forward to email via Resend/Postmark
 *  - Post to a CRM (HubSpot/Pipedrive) webhook
 *  - Post to a Slack channel webhook
 * Until then, submissions are logged to the Vercel function logs so
 * nothing is silently lost.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, company, email, message } = (body ?? {}) as Record<
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

  const lead = {
    name: name.trim(),
    company: typeof company === "string" ? company.trim() : "",
    email: email.trim(),
    message: typeof message === "string" ? message.trim() : "",
    at: new Date().toISOString(),
  };

  console.log("[incrementi] new lead:", JSON.stringify(lead));

  return NextResponse.json({ ok: true });
}
