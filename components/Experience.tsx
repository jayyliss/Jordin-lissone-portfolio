import { EXPERIENCES } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-sm font-semibold text-secondary uppercase tracking-widest mb-10">
          Experience
        </h2>

        <div className="space-y-10">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-secondary italic">{exp.role}</p>
                </div>
                <p className="text-sm text-secondary tabular-nums flex-shrink-0">
                  {exp.period}
                </p>
              </div>

              <p className="mt-3 text-sm text-secondary leading-relaxed">
                {exp.description}
              </p>

              <ul className="mt-3 space-y-1.5">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-sm text-foreground/80 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-divider"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="mt-12 border-divider" />
      </div>
    </section>
  );
}
