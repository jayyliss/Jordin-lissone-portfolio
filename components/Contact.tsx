import { SITE_CONFIG } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-sm font-semibold text-secondary uppercase tracking-widest mb-6">
          Contact
        </h2>

        <p className="text-base text-foreground leading-relaxed mb-4">
          Interested in discussing cybersecurity strategy, career opportunities,
          or real estate in the NY/CT area? I&apos;d love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm">
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-foreground transition-colors duration-200 underline underline-offset-4 decoration-divider hover:decoration-foreground"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-accent hover:text-foreground transition-colors duration-200 underline underline-offset-4 decoration-divider hover:decoration-foreground"
          >
            {SITE_CONFIG.email}
          </a>
        </div>
      </div>
    </section>
  );
}
