import { EDUCATION, CERTIFICATIONS } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-xs font-semibold text-secondary uppercase tracking-[0.15em] mb-12">
          Education
        </h2>

        <div className="space-y-8">
          {EDUCATION.map((edu) => (
            <div key={edu.id}>
              <h3 className="text-base font-semibold text-foreground">
                {edu.degree}
              </h3>
              <p className="mt-0.5 text-sm text-secondary">
                {edu.school}
                <span className="mx-2 text-divider" aria-hidden="true">
                  ·
                </span>
                {edu.dates}
              </p>
              {edu.activities && (
                <p className="mt-1.5 text-sm text-secondary/80">
                  {edu.activities}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Certifications as inline chips */}
        <div className="mt-12">
          <h3 className="text-xs font-semibold text-secondary uppercase tracking-[0.15em] mb-4">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-2">
            {CERTIFICATIONS.map((cert) => (
              <span
                key={cert.id}
                className="inline-flex items-center gap-1.5 text-xs text-foreground/80 bg-foreground/[0.03] border border-divider rounded-full px-3.5 py-1.5"
              >
                {cert.name}
                <span className="text-secondary">&middot;</span>
                <span className="text-secondary">{cert.issuer}</span>
              </span>
            ))}
          </div>
        </div>

        <hr className="mt-24 border-divider" />
      </div>
    </section>
  );
}
