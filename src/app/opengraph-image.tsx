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
          background: "#e8420a",
        }}
      >
        <div style={{ width: 56, height: 4, background: "#f2b705", marginBottom: 40 }} />
        <div style={{ fontSize: 84, fontWeight: 800, color: "#faf6ec", letterSpacing: "-0.02em", fontFamily: "sans-serif" }}>
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 32, color: "#faf6ec", opacity: 0.85 }}>{siteConfig.role}</div>
      </div>
    ),
    { ...size },
  );
}
