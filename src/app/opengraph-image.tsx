import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Kontrol — Organização Financeira Inteligente";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoData = await readFile(join(process.cwd(), "public/logo.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "Arial Black, Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative circle */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "#FFF7ED",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "#FFF7ED",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 48,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoBase64}
            alt="Kontrol logo"
            style={{ width: 80, height: 80, objectFit: "contain" }}
          />
          <span
            style={{
              fontSize: 40,
              fontWeight: 900,
              color: "#1A1A2E",
              letterSpacing: "-1px",
            }}
          >
            Kontrol
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 68,
            fontWeight: 900,
            color: "#1A1A2E",
            lineHeight: 1.05,
            letterSpacing: "-3px",
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          <span>Suas finanças.&nbsp;</span>
          <span style={{ color: "#F97316" }}>Simplificadas.</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            color: "#64748B",
            maxWidth: 760,
            lineHeight: 1.4,
            marginBottom: 48,
          }}
        >
          Controle total sobre receitas, despesas, investimentos e metas — tudo
          em um só lugar.
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 32 }}>
          {[
            { value: "10k+", label: "usuários" },
            { value: "4.8", label: "avaliação" },
            { value: "R$ 2M+", label: "economizados" },
          ].map((stat) => (
            <div
              key={stat.value}
              style={{
                background: "#FFF7ED",
                border: "2px solid #FED7AA",
                borderRadius: 16,
                padding: "14px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  color: "#F97316",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span style={{ fontSize: 16, color: "#64748B" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
