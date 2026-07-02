import { ImageResponse } from "next/og";

export const alt = "Incrementi — The AI transformation partner";
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
            "radial-gradient(700px 700px at 50% 45%, rgba(201,138,94,0.18), #08090B 65%)",
          backgroundColor: "#08090B",
          color: "#F4F2EE",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#C98A5E",
            marginBottom: 36,
          }}
        >
          The AI transformation partner
        </div>
        <div
          style={{
            fontSize: 86,
            fontWeight: 300,
            letterSpacing: -2,
            display: "flex",
          }}
        >
          INCREMENTI
          <span style={{ color: "#C98A5E" }}>.</span>
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#A7ABB2",
            marginTop: 30,
            fontStyle: "italic",
          }}
        >
          The whole journey to AI-native
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 44,
            fontSize: 17,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#6E737B",
          }}
        >
          A 99x Company
        </div>
      </div>
    ),
    { ...size }
  );
}
