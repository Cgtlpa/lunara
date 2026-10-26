import type { ReactNode } from "react";

/** Shared wide page container (desktop ~1360px). */
export const wrap = "mx-auto w-full max-w-[1360px] px-5 md:px-10";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-6 bg-primary/60" aria-hidden />
      {children}
    </p>
  );
}

export function Status({ children = "Planned" }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-accent">
      <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
      {children}
    </span>
  );
}

export const directions = [
  { n: "A", name: "Arch-based", text: "A Lunara variant built on Arch Linux." },
  { n: "V", name: "Void-based", text: "A Lunara variant built on Void Linux." },
  { n: "L", name: "Independent", text: "Lunara's own distribution direction, separate from the Arch and Void bases." },
];

export function Directions() {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {directions.map((d) => (
        <li key={d.n} className="grid grid-cols-[2.5rem_1fr] gap-4 py-5 sm:grid-cols-[2.5rem_12rem_1fr_auto] sm:items-baseline">
          <span className="font-mono text-sm text-accent">{d.n}</span>
          <h3 className="font-medium text-foreground">{d.name}</h3>
          <p className="col-start-2 text-sm text-muted-foreground sm:col-start-auto">{d.text}</p>
          <span className="col-start-2 sm:col-start-auto"><Status>In development</Status></span>
        </li>
      ))}
    </ul>
  );
}

/** Illustrative Lua snippet. Not a real, finalized format. */
export function LuaSketch() {
  return (
    <figure className="border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border px-4 py-2 font-mono text-[11px] text-muted-foreground">
        <span>system.lua</span>
        <span className="text-accent">illustrative · syntax not final</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed text-muted-foreground">
        <code>
          <span className="text-accent">-- describe the system you want</span>{"\n"}
          <span className="text-primary-soft">system</span> {"{"}{"\n"}
          {"  "}hostname = <span className="text-primary">"selene"</span>,{"\n"}
          {"  "}desktop  = <span className="text-primary">"instantwm"</span>,{"\n"}
          {"  "}packages = {"{"} <span className="text-primary">"git"</span>, <span className="text-primary">"neovim"</span> {"}"},{"\n"}
          {"}"}
        </code>
      </pre>
    </figure>
  );
}
