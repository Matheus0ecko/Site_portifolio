import { skills } from "../data/profile";
import SectionLabel from "./SectionLabel";

export default function Skills() {
  // agrupa por "group"
  const groups = skills.reduce((acc, s) => {
    (acc[s.group] ??= []).push(s.name);
    return acc;
  }, {});

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionLabel index="02" title="Skills" />
      <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {Object.entries(groups).map(([group, items]) => (
          <div
            key={group}
            className="rounded-xl border border-border bg-surface p-6 hover:border-accent/50 transition-colors"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              {group}
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((name) => (
                <span
                  key={name}
                  className="text-sm px-3 py-1.5 rounded-full border border-border bg-surface-2 text-text"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
