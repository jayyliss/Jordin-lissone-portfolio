import { SITE_CONFIG } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-xs font-semibold text-secondary uppercase tracking-[0.15em] mb-8">
          Get in Touch
        </h2>

        <p className="text-base text-foreground/90 leading-relaxed max-w-[540px]">
          Interested in discussing data governance, privacy, AI risk, or
          compliance? I am always open to connecting.
        </p>

        <div className="mt-6 flex items-center gap-6 text-sm">
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline underline-offset-4 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-accent hover:underline underline-offset-4 transition-colors duration-200"
          >
            {SITE_CONFIG.email}
          </a>
        </div>
      </div>
    </section>
  );
}
