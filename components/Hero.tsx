import { SITE_CONFIG, HERO_METRICS, HERO_BIO } from "@/lib/data";

export default function Hero() {
  return (
    <section className="pt-36 pb-24 sm:pt-44 sm:pb-28">
      <div className="max-w-content mx-auto px-6">
        {/* Open to Opportunities badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent bg-accent/[0.06] border border-accent/15 rounded-full px-3.5 py-1.5 tracking-wide">
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            Open to Opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-foreground font-bold tracking-tight leading-[1.05]"
          style={{ fontSize: "clamp(40px, 6vw, 56px)" }}
        >
          {SITE_CONFIG.name}, {SITE_CONFIG.credentials}
        </h1>

        {/* Headline */}
        <p className="mt-3 text-xl sm:text-2xl text-secondary font-normal leading-snug">
          {SITE_CONFIG.headline}
        </p>

        {/* Location + LinkedIn */}
        <p className="mt-3 text-sm text-secondary">
          {SITE_CONFIG.location}
          <span className="mx-2 text-divider" aria-hidden="true">
            ·
          </span>
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline underline-offset-4 transition-colors duration-200"
          >
            LinkedIn
          </a>
        </p>

        {/* Short bio */}
        <p className="mt-6 text-base text-secondary leading-relaxed max-w-[600px]">
          {HERO_BIO}
        </p>

        {/* Metrics row */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label}>
              <p className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                {metric.value}
              </p>
              <p className="mt-1 text-xs text-secondary leading-tight">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
