import { ABOUT_BIO } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-sm font-semibold text-secondary uppercase tracking-widest mb-6">
          About
        </h2>
        <p className="text-base sm:text-lg text-foreground leading-relaxed">
          {ABOUT_BIO}
        </p>
        <hr className="mt-12 border-divider" />
      </div>
    </section>
  );
}
