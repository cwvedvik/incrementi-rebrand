import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Incrementi. From data chaos to measurable productivity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [medium, bold, logo] = await Promise.all([
    readFile(join(process.cwd(), "app/fonts/DMSans-Medium.ttf")),
    readFile(join(process.cwd(), "app/fonts/DMSans-Bold.ttf")),
    readFile(join(process.cwd(), "public/brand/logo-dark.svg")),
  ]);
  const logoUri = `data:image/svg+xml;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#E8E3DE",
          color: "#1E1B1C",
          fontFamily: "DM Sans",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#446449",
            marginBottom: 28,
          }}
        >
          The data & AI partner
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoUri} alt="" width={520} height={75} />
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "#1E1B1C",
            marginTop: 36,
            maxWidth: 860,
          }}
        >
          From data chaos to measurable productivity
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 80,
            fontSize: 18,
            fontWeight: 500,
            color: "#5E5759",
          }}
        >
          A 99x Company
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "DM Sans", data: medium, weight: 500, style: "normal" },
        { name: "DM Sans", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
}
