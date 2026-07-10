import { Github, ArrowUpRight, BarChart3, Brain } from "lucide-react";
import { featuredProjects } from "../data/profile";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionLabel index="03" title="Projetos em destaque" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ p }) {
  const isPBI = p.kind === "Power BI";
  const Icon = isPBI ? BarChart3 : Brain;
  const kindColor = isPBI
    ? "text-accent border-accent/40 bg-accent/10"
    : "text-accent-2 border-accent-2/40 bg-accent-2/10";

  return (
    <article className="reveal group flex flex-col rounded-xl border border-border bg-surface overflow-hidden hover:border-accent/50 hover:-translate-y-1 transition-all duration-300">
      {/* topo com ícone e etiqueta */}
      <div className="relative h-36 bg-surface-2 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        />
        <Icon
          size={44}
          className={isPBI ? "text-accent relative" : "text-accent-2 relative"}
          strokeWidth={1.5}
        />
        <span
          className={`absolute top-3 left-3 text-xs font-mono px-2.5 py-1 rounded-full border ${kindColor}`}
        >
          {p.kind}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display font-semibold text-lg leading-tight mb-2">
          {p.title}
        </h3>
        <p className="text-sm text-muted flex-1">{p.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {p.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-1 rounded border border-border text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-5 pt-4 border-t border-border">
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
          >
            <Github size={16} /> Código
          </a>
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
            >
              <ArrowUpRight size={16} /> Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
