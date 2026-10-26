import { Download } from "lucide-react";
import type { Edition } from "@/lib/site";
import { btn } from "./Button";

export function EditionEntry({ edition, index }: { edition: Edition; index: number }) {
  const available = !!edition.downloadUrl;
  return (
    <article className="grid grid-cols-[3rem_1fr] gap-x-4 gap-y-3 border-b border-border py-8 last:border-b-0 lg:grid-cols-[3rem_minmax(0,14rem)_minmax(0,10rem)_1fr_auto] lg:items-center lg:gap-8">
      <span className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
      <h2 className="font-serif text-2xl text-foreground">{edition.name}</h2>
      <p className="col-start-2 font-mono text-xs text-primary lg:col-start-auto">{edition.base}</p>
      <p className="col-start-2 max-w-[55ch] text-sm text-muted-foreground lg:col-start-auto">{edition.description}</p>
      <div className="col-start-2 flex w-full flex-col gap-2 sm:w-40 lg:col-start-auto">
        {!available && (
          <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-disabled-foreground" aria-hidden />
            Currently unavailable
          </p>
        )}
        {available ? (
          <a href={edition.downloadUrl!} className={btn()}>
            <Download className="h-4 w-4" aria-hidden /> Download ISO
          </a>
        ) : (
          <button type="button" disabled className={btn({ variant: "disabled" })}>
            <Download className="h-4 w-4" aria-hidden /> Download ISO
          </button>
        )}
      </div>
    </article>
  );
}
