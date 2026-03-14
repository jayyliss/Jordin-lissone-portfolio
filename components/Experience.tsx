import { EXPERIENCES } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-xs font-semibold text-secondary uppercase tracking-[0.15em] mb-12">
          Experience
        </h2>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className={`${
                index === 0
                  ? "border-l-2 border-accent pl-5"
                  : "border-l border-divider pl-5"
              }`}
            >
              {/* Company name */}
              <h3 className="text-lg font-semibold text-foreground leading-tight">
                {exp.company}
              </h3>

              {/* Role and department */}
              <p className="mt-0.5 text-sm text-foreground/80">
                {exp.role}
                {exp.department && (
                  <span className="text-secondary">
                    {" "}
                    &middot; {exp.department}
                  </span>
                )}
              </p>

              {/* Period + Location */}
              <p className="mt-1 text-sm text-secondary tabular-nums">
                {exp.period}
                {exp.location && (
                  <span>
                    {" "}
                    &middot; {exp.location}
                  </span>
                )}
              </p>

              {/* Highlights */}
              {exp.highlights.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground/75 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1 before:h-1 before:rounded-full before:bg-secondary/40"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <hr className="mt-24 border-divider" />
      </div>
    </section>
  );
}
