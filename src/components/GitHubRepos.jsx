import { useEffect, useState } from "react";
import { Github, Star, GitFork, ArrowUpRight, Loader2 } from "lucide-react";
import { profile } from "../data/profile";
import SectionLabel from "./SectionLabel";

// Cores por linguagem (adicione mais se quiser)
const langColor = {
  Python: "#3572A5",
  Jupyter: "#DA5B0B",
  "Jupyter Notebook": "#DA5B0B",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  TSQL: "#e38c00",
  PLpgSQL: "#336790",
  R: "#198CE7",
};

export default function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [state, setState] = useState("loading"); // loading | ok | error

  useEffect(() => {
    let active = true;
    fetch(
      `https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=100`
    )
      .then((r) => {
        if (!r.ok) throw new Error("GitHub API");
        return r.json();
      })
      .then((data) => {
        if (!active) return;
        const cleaned = data
          .filter((r) => !r.fork)
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
          .slice(0, 6);
        setRepos(cleaned);
        setState("ok");
      })
      .catch(() => active && setState("error"));
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="repos" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionLabel index="04" title="Direto do GitHub" />

      <p className="reveal text-muted text-sm mt-6 mb-8 font-mono">
        Repositórios atualizados automaticamente de{" "}
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="text-accent hover:underline"
        >
          @{profile.githubUsername}
        </a>
      </p>

      {state === "loading" && (
        <div className="flex items-center gap-3 text-muted">
          <Loader2 className="animate-spin" size={18} /> Carregando repositórios…
        </div>
      )}

      {state === "error" && (
        <div className="rounded-xl border border-border bg-surface p-6 text-muted text-sm">
          Não foi possível carregar os repositórios agora (limite da API do
          GitHub). Veja tudo direto no{" "}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            perfil do GitHub
          </a>
          .
        </div>
      )}

      {state === "ok" && (
        <div className="grid md:grid-cols-2 gap-5">
          {repos.map((r, i) => (
            <a
              key={r.id}
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
              className="animate-fade-up group rounded-xl border border-border bg-surface p-6 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 font-display font-semibold">
                  <Github size={18} className="text-muted" />
                  <span className="group-hover:text-accent transition-colors">
                    {r.name}
                  </span>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted group-hover:text-accent transition-colors shrink-0"
                />
              </div>

              <p className="text-sm text-muted mt-3 min-h-[2.5rem] line-clamp-2">
                {r.description || "Sem descrição."}
              </p>

              <div className="flex items-center gap-5 mt-4 text-xs font-mono text-muted">
                {r.language && (
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: langColor[r.language] || "#8b93a7" }}
                    />
                    {r.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Star size={13} /> {r.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={13} /> {r.forks_count}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
