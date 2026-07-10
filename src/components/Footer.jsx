import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
        <span className="font-mono">
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="font-mono text-xs">
          Feito com React + Tailwind · publicado no Azure
        </span>
      </div>
    </footer>
  );
}
