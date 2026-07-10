export default function SectionLabel({ index, title }) {
  return (
    <div className="reveal flex items-baseline gap-4">
      <span className="font-mono text-accent text-sm">{index}</span>
      <h2 className="font-display text-sm uppercase tracking-widest text-muted">
        {title}
      </h2>
      <span className="flex-1 h-px bg-border" />
    </div>
  );
}
