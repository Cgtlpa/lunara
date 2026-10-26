import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { EditionEntry } from "@/components/site/EditionEntry";
import { Eyebrow, wrap } from "@/components/site/Section";
import { editions, GITHUB_URL } from "@/lib/site";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads — Lunara Linux" },
      { name: "description", content: "Lunara Arch, Lunara Void and Lunara Independent. ISO images are not available yet." },
      { property: "og:title", content: "Downloads — Lunara Linux" },
      { property: "og:description", content: "The three Lunara editions. ISO images will be published here once they exist." },
    ],
  }),
  component: Downloads,
});

function Downloads() {
  return (
    <>
      <section className="border-b border-border">
        <div className={`${wrap} grid gap-6 py-12 md:grid-cols-[1fr_auto] md:items-end md:py-16`}>
          <div className="animate-fade-up">
            <Eyebrow>Downloads</Eyebrow>
            <h1 className="mt-5 font-serif text-5xl tracking-tight text-foreground">Editions.</h1>
            <p className="mt-4 max-w-[56ch] leading-relaxed text-muted-foreground">
              Lunara is developed in three editions. No ISO images have been released yet — each entry below will become downloadable once a release exists.
            </p>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            {editions.length} editions · 0 available
          </p>
        </div>
      </section>
      <section className="bg-secondary">
        <div className={`${wrap} py-4`}>
          <div className="hidden grid-cols-[3rem_minmax(0,14rem)_minmax(0,10rem)_1fr_auto] gap-8 border-b border-border py-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground lg:grid">
            <span>#</span><span>Edition</span><span>Base</span><span>Description</span><span className="w-40">Status</span>
          </div>
          {editions.map((e, i) => <EditionEntry key={e.id} edition={e} index={i} />)}
        </div>
      </section>
      <section>
        <div className={`${wrap} flex flex-col gap-4 py-12 sm:flex-row sm:items-center sm:justify-between`}>
          <p className="max-w-[60ch] text-sm text-muted-foreground">Releases will be announced through the project repository.</p>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary-soft underline decoration-border underline-offset-4 hover:decoration-primary">
            Follow development on GitHub <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </section>
    </>
  );
}
