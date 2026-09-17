import { ImageResponse } from "next/og";

export const alt =
  "Incrementi — From data chaos to measurable productivity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(700px 700px at 50% 45%, rgba(133,162,137,0.22), #E8E3DE 65%)",
          backgroundColor: "#E8E3DE",
          color: "#283B2B",
          fontFamily: "DM Sans, Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#765070",
            marginBottom: 36,
          }}
        >
          The data & AI partner
        </div>
        <div
          style={{
            fontSize: 86,
            fontWeight: 600,
            letterSpacing: -2,
            display: "flex",
          }}
        >
          INCREMENTI
          <span style={{ color: "#765070" }}>.</span>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#405E45",
            marginTop: 30,
                        maxWidth: 900,
            textAlign: "center",
          }}
        >
          From data chaos to measurable productivity
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 44,
            fontSize: 17,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#486A4D",
          }}
        >
          A 99x Company
        </div>
      </div>
    ),
    { ...size }
  );
}
