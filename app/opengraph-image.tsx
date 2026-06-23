import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Damola Doyin — Website Developer, Digital Experience Designer & Growth Strategist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000",
          padding: "72px",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, letterSpacing: 6, textTransform: "uppercase", color: "#8A8A8A" }}>
          <div style={{ width: 12, height: 12, background: "#fff" }} />
          Lagos, Nigeria
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, fontWeight: 700, lineHeight: 0.9, letterSpacing: -4 }}>
            Designed to perform
          </div>
          <div style={{ fontSize: 38, marginTop: 28, color: "#fff" }}>
            Website Developer · Digital Experience Designer · Growth Strategist
          </div>
        </div>

        <div style={{ fontSize: 30, color: "#A1A1AA", maxWidth: 900 }}>
          I don&apos;t build websites. I build digital experiences that drive business growth.
        </div>
      </div>
    ),
    { ...size }
  );
}
