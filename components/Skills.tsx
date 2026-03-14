import { SKILL_CATEGORIES } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-sm font-semibold text-secondary uppercase tracking-widest mb-10">
          Expertise
        </h2>

        <div className="space-y-8">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.id}>
              <h3 className="text-base font-semibold text-foreground mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-x-2 gap-y-1.5">
                {category.skills.map((skill, i) => (
                  <span key={skill} className="text-sm text-secondary">
                    {skill}
                    {i < category.skills.length - 1 && (
                      <span className="ml-2 text-divider select-none">/</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr className="mt-12 border-divider" />
      </div>
    </section>
  );
}
