import { Download } from "lucide-react";
import type { Edition } from "@/lib/site";
import { btn } from "./Button";

export function EditionEntry({ edition, index }: { edition: Edition; index: number }) {
  const available = !!edition.downloadUrl;
  return (
    <article className="grid gap-5 border-b border-border py-8 md:grid-cols-[3rem_1fr_auto] md:items-center">
      <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-xl font-medium text-foreground">{edition.name}</h2>
          <span className="rounded-sm border border-border px-2 py-0.5 font-mono text-[11px] text-primary">
            Base: {edition.base}
          </span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{edition.description}</p>
        {!available && (
          <p className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-disabled-foreground" aria-hidden />
            Currently unavailable
          </p>
        )}
      </div>
      {available ? (
        <a href={edition.downloadUrl!} className={btn()}>
          <Download className="h-4 w-4" aria-hidden /> Download ISO
        </a>
      ) : (
        <button type="button" disabled aria-disabled="true" className={btn({ variant: "disabled" })}>
          <Download className="h-4 w-4" aria-hidden /> Download ISO
        </button>
      )}
    </article>
  );
}
