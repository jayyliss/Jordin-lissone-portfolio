import { EDUCATION, CERTIFICATIONS } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-12 sm:py-16">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-sm font-semibold text-secondary uppercase tracking-widest mb-10">
          Education
        </h2>

        <div className="space-y-6">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="text-sm text-secondary">{edu.school}</p>
              </div>
              <p className="text-sm text-secondary tabular-nums flex-shrink-0">
                {edu.year}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-sm font-semibold text-secondary uppercase tracking-widest mt-12 mb-6">
          Certifications
        </h3>

        <div className="space-y-3">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="flex items-baseline justify-between">
              <div>
                <span className="text-sm font-medium text-foreground">
                  {cert.name}
                </span>
                <span className="text-sm text-secondary ml-2">
                  ({cert.code})
                </span>
              </div>
              <span className="text-xs text-secondary">
                {cert.status === "earned" ? cert.issuer : "In progress"}
              </span>
            </div>
          ))}
        </div>

        <hr className="mt-12 border-divider" />
      </div>
    </section>
  );
}
