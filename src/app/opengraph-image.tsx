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
          background: "#f7f4ef",
        }}
      >
        <div style={{ width: 56, height: 4, background: "#f97316", marginBottom: 40 }} />
        <div style={{ fontSize: 84, fontWeight: 800, color: "#171412", letterSpacing: "-0.02em", fontFamily: "sans-serif" }}>
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 32, color: "#6f6963" }}>{siteConfig.role}</div>
      </div>
    ),
    { ...size },
  );
}
