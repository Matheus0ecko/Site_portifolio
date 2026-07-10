import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionLabel index="05" title="Contato" />

      <div className="reveal mt-10">
        <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tight max-w-2xl leading-tight">
          Vamos conversar sobre dados?
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-2 mt-8 font-display text-2xl sm:text-3xl text-accent hover:underline"
        >
          {profile.email}
          <ArrowUpRight
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            size={28}
          />
        </a>

        <div className="flex flex-wrap gap-4 mt-10">
          <Social href={`mailto:${profile.email}`} icon={Mail} label="E-mail" />
          <Social href={profile.github} icon={Github} label="GitHub" />
          <Social href={profile.linkedin} icon={Linkedin} label="LinkedIn" />
        </div>
      </div>
    </section>
  );
}

function Social({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 border border-border rounded-full px-5 py-2.5 text-sm text-text hover:border-accent hover:text-accent transition-colors"
    >
      <Icon size={16} /> {label}
    </a>
  );
}
