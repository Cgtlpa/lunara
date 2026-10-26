import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">{children}</p>
  );
}

export const directions = [
  { n: "01", name: "Arch-based", text: "A Lunara variant built on Arch Linux." },
  { n: "02", name: "Void-based", text: "A Lunara variant built on Void Linux." },
  { n: "03", name: "Independent", text: "Lunara's own distribution direction, separate from the Arch and Void bases." },
];

export function Directions() {
  return (
    <div className="grid border-y border-border md:grid-cols-3">
      {directions.map((d, i) => (
        <div
          key={d.n}
          className={`group p-6 transition-colors hover:bg-card md:p-8 ${i > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}
        >
          <span className="font-mono text-xs text-accent">{d.n}</span>
          <h3 className="mt-6 text-lg font-medium text-foreground">{d.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">In development</p>
        </div>
      ))}
    </div>
  );
}
