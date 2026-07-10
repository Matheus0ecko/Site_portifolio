import { profile } from "../data/profile";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionLabel index="01" title="Sobre" />

      <div className="grid md:grid-cols-5 gap-10 mt-10 items-stretch">
        {/* Foto */}
        <div className="reveal md:col-span-2">
          <div className="relative rounded-2xl border border-border bg-surface overflow-hidden h-full min-h-[360px] flex items-end justify-center">
            {/* fundo pontilhado */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />
            {/* brilho de destaque */}
            <div
              className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl opacity-30"
              style={{ background: "var(--accent)" }}
            />
            <img
              src="/eu.png"
              alt="Matheus Matos"
              className="relative z-10 h-[92%] w-auto object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Texto + dados */}
        <div className="md:col-span-3 flex flex-col justify-center">
          <p className="reveal font-display text-2xl sm:text-3xl leading-snug tracking-tight">
            {profile.about}
          </p>

          <div className="reveal grid sm:grid-cols-2 gap-x-8 gap-y-5 font-mono text-sm mt-10">
            <Field k="Nome" v={profile.name} />
            <Field k="Função" v={`${profile.role} · ${profile.subrole}`} />
            <Field k="Local" v={profile.location} />
            <Field
              k="E-mail"
              v={profile.email}
              link={`mailto:${profile.email}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ k, v, link }) {
  return (
    <div className="border-t border-border pt-3">
      <div className="text-muted text-xs uppercase tracking-widest mb-1">
        {k}
      </div>
      {link ? (
        <a
          href={link}
          className="text-text hover:text-accent transition-colors break-all"
        >
          {v}
        </a>
      ) : (
        <div className="text-text">{v}</div>
      )}
    </div>
  );
}
