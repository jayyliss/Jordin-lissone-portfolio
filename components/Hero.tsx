import { SITE_CONFIG } from "@/lib/data";

export default function Hero() {
  return (
    <section className="pt-40 pb-20 sm:pt-48 sm:pb-28">
      <div className="max-w-content mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
          {SITE_CONFIG.name}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-secondary font-normal">
          {SITE_CONFIG.headline} &middot; PwC &middot; {SITE_CONFIG.credentials}
        </p>
        <p className="mt-2 text-sm text-secondary">
          {SITE_CONFIG.location}
        </p>
        <hr className="mt-10 border-divider" />
      </div>
    </section>
  );
}
