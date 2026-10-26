import { createFileRoute } from "@tanstack/react-router";
import { Github } from "lucide-react";
import { EditionEntry } from "@/components/site/EditionEntry";
import { Eyebrow } from "@/components/site/Section";
import { editions, GITHUB_URL } from "@/lib/site";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads — Lunara Linux" },
      { name: "description", content: "Lunara Arch, Lunara Void and Lunara Independent. Download images will become available as the project develops." },
      { property: "og:title", content: "Downloads — Lunara Linux" },
      { property: "og:description", content: "Find your Lunara. ISO images will be published here as the project develops." },
    ],
  }),
  component: Downloads,
});

function Downloads() {
  return (
    <section className="relative">
      <div className="starfield pointer-events-none absolute inset-x-0 top-0 h-80 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-5 py-16 md:py-24">
        <div className="animate-fade-up">
          <Eyebrow>Downloads</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Find your Lunara.</h1>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Choose the direction that interests you. Download images will become available as the project develops.
          </p>
        </div>
        <div className="mt-12 border-t border-border">
          {editions.map((e, i) => <EditionEntry key={e.id} edition={e} index={i} />)}
        </div>
        <div className="mt-10 flex flex-col gap-4 rounded-md border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">ISO images are not available yet. Check back here for future releases.</p>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 text-sm text-primary hover:underline">
            <Github className="h-4 w-4" aria-hidden /> Follow development
          </a>
        </div>
      </div>
    </section>
  );
}
