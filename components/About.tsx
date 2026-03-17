import { ABOUT_TEXT, CORE_SKILLS } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-xs font-semibold text-secondary uppercase tracking-[0.15em] mb-8">
          About
        </h2>

        <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
          {ABOUT_TEXT}
        </p>

        {/* Core skills as inline chips */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CORE_SKILLS.map((skill) => (
            <span
              key={skill}
              className="text-xs text-secondary bg-white/5 border border-divider rounded-full px-3 py-1"
            >
              {skill}
            </span>
          ))}
        </div>

        <hr className="mt-24 border-divider" />
      </div>
    </section>
  );
}
