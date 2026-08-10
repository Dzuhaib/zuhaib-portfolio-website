import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Zuhaib Ahmed — Full Stack Developer & AI Engineer based in Sindh, Pakistan";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#10B981",
            }}
          >
            {SITE.location}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 82,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.05,
            }}
          >
            Zuhaib Ahmed
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 42,
              fontWeight: 600,
              color: "#d4d4d4",
              lineHeight: 1.2,
            }}
          >
            Full Stack Developer &amp; AI Engineer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: 96,
              height: 5,
              backgroundColor: "#10B981",
              marginBottom: 28,
            }}
          />
          <div style={{ display: "flex", fontSize: 26, color: "#a3a3a3" }}>
            AI systems · Automation pipelines · Next.js applications
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontSize: 24,
              color: "#10B981",
            }}
          >
            zuhaib.aivized.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
