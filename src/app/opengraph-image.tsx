import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background: "#faf7f1",
        }}
      >
        <div style={{ width: 56, height: 4, background: "#8a3a18", marginBottom: 40 }} />
        <div style={{ fontSize: 84, fontWeight: 600, color: "#1b1812", letterSpacing: "-0.02em", fontFamily: "serif" }}>
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 32, color: "#57534a" }}>{siteConfig.role}</div>
      </div>
    ),
    { ...size },
  );
}
