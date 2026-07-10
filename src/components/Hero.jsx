import { ArrowUpRight, ArrowDown } from "lucide-react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      <PlotBackground />

      <div className="relative mx-auto max-w-6xl px-6 w-full">
        <p
          className="font-mono text-xs sm:text-sm text-accent tracking-widest uppercase mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          [ {profile.role} · {profile.location} ]
        </p>

        <h1
          className="font-display font-bold leading-[0.95] tracking-tight animate-fade-up"
          style={{ animationDelay: "0.25s", opacity: 0 }}
        >
          <span className="block text-5xl sm:text-7xl lg:text-8xl">
            {profile.name}
          </span>
          <span className="block text-3xl sm:text-5xl lg:text-6xl text-muted mt-3">
            {profile.tagline}
          </span>
        </h1>

        <p
          className="mt-8 max-w-xl text-base sm:text-lg text-muted animate-fade-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          {profile.subrole}. Do dado bruto à decisão — Power BI, Python e SQL.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.55s", opacity: 0 }}
        >
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 bg-accent text-bg font-medium px-6 py-3 rounded-full hover:brightness-110 transition"
          >
            Ver projetos
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 border border-border text-text font-medium px-6 py-3 rounded-full hover:border-accent hover:text-accent transition"
          >
            Contato
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para baixo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </a>
    </section>
  );
}

// Assinatura visual: uma linha de dados plotada + pontos, estilo gráfico.
function PlotBackground() {
  const points = [
    [40, 320],
    [140, 280],
    [240, 300],
    [340, 210],
    [440, 240],
    [540, 150],
    [640, 180],
    [740, 90],
    [840, 120],
  ];
  const path = points
    .map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`))
    .join(" ");

  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.55]">
      <svg
        viewBox="0 0 900 400"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0" />
          </linearGradient>
          <pattern
            id="grid"
            width="45"
            height="45"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 45 0 L 0 0 0 45"
              fill="none"
              stroke="var(--border)"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>

        <rect width="900" height="400" fill="url(#grid)" opacity="0.5" />

        {/* área sob a curva */}
        <path d={`${path} L 840 400 L 40 400 Z`} fill="url(#grad)" />

        {/* linha plotada, desenhada na entrada */}
        <path
          d={path}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1000"
          className="animate-draw"
        />

        {/* pontos de dados */}
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p[0]}
            cy={p[1]}
            r="4"
            fill="var(--bg)"
            stroke="var(--accent-2)"
            strokeWidth="2"
            className="animate-pulse-dot"
            style={{ animationDelay: `${i * 0.25}s` }}
          />
        ))}
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 40%, var(--bg) 92%)",
        }}
      />
    </div>
  );
}
