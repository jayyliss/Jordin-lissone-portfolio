import Image from "next/image";
import { SITE_CONFIG, HERO_METRICS, HERO_BIO } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative bg-hero-dark overflow-hidden">
      {/* Warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(200,144,30,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-content mx-auto px-6 pt-36 pb-16 relative">
        {/* Always row layout — same on mobile and desktop */}
        <div className="flex flex-row items-start gap-6">
          {/* Photo */}
          <div className="shrink-0">
            <div
              className="rounded-full p-[3px]"
              style={{
                background:
                  "linear-gradient(135deg, #C8901E 0%, #E8B84B 50%, #9A6C10 100%)",
              }}
            >
              <Image
                src="/jordin.jpg"
                alt={`${SITE_CONFIG.name} profile photo`}
                width={96}
                height={96}
                className="rounded-full object-cover block"
                style={{ width: 96, height: 96 }}
                priority
              />
            </div>
          </div>

          {/* Text — always left-aligned */}
          <div className="text-left min-w-0">
            <h1
              className="text-hero-text font-bold tracking-tight leading-[1.05]"
              style={{ fontSize: "clamp(26px, 5vw, 56px)" }}
            >
              {SITE_CONFIG.name},&nbsp;
              <span className="text-accent">{SITE_CONFIG.credentials}</span>
            </h1>

            <p
              className="mt-2 text-hero-muted font-normal leading-snug"
              style={{ fontSize: "clamp(14px, 2.5vw, 22px)" }}
            >
              {SITE_CONFIG.headline}
            </p>

            <p className="mt-2 text-sm text-hero-muted">
              {SITE_CONFIG.location}
              <span className="mx-2 opacity-40" aria-hidden="true">·</span>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-amber-400 transition-colors duration-200"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-6 text-sm text-hero-muted leading-relaxed max-w-[600px]" style={{ fontSize: "clamp(13px, 2vw, 16px)" }}>
          {HERO_BIO}
        </p>

        {/* Metrics */}
        <div className="mt-8 grid grid-cols-2 gap-5" style={{ maxWidth: 480 }}>
          {HERO_METRICS.map((metric) => (
            <div key={metric.label}>
              <p
                className="font-bold text-accent tracking-tight"
                style={{ fontSize: "clamp(24px, 5vw, 40px)" }}
              >
                {metric.value}
              </p>
              <p className="mt-0.5 text-xs text-hero-muted leading-tight">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
