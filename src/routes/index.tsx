import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { btn } from "@/components/site/Button";
import { mascotUrl } from "@/components/site/Brand";
import { Eyebrow, LuaSketch, Status, wrap } from "@/components/site/Section";
import { RepoInfo } from "@/components/site/RepoInfo";
import { focusAreas, GITHUB_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lunara Linux — Linux, shaped around you" },
      { name: "description", content: "Lunara is an independent Linux distribution project focused on reproducible Lua configurations, a package manager rework and an InstantWM desktop." },
      { property: "og:title", content: "Lunara Linux — Linux, shaped around you" },
      { property: "og:description", content: "An independent Linux distribution project focused on reproducible configurations and practical everyday improvements." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className={`${wrap} grid gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16`}>
          <div className="flex animate-fade-up flex-col justify-center">
            <Eyebrow>Independent Linux distribution · in development</Eyebrow>
            <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl xl:text-7xl">
              Linux, shaped<br />around <em className="text-primary-soft">you.</em>
            </h1>
            <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-muted-foreground">
              Lunara is an independent Linux distribution project focused on reproducible system configurations, a more deliberate desktop experience, and practical improvements to everyday Linux use.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link to="/about" className={btn()}>Explore Lunara <ArrowRight className="h-4 w-4" aria-hidden /></Link>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary">
                View source on GitHub <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
          </div>

          <figure className="relative border border-border bg-secondary">
            <div className="lunar-grid absolute inset-0 opacity-60" aria-hidden />
            <div className="relative flex items-center justify-between border-b border-border px-4 py-2 font-mono text-[11px] text-muted-foreground">
              <span>fig. 01</span><span>lunara</span>
            </div>
            <img src={mascotUrl} alt="The Lunara mascot, a lunar winged creature in blue, purple and white" width={900} height={760} className="relative mx-auto w-[82%] py-6" />
            <figcaption className="relative border-t border-border px-4 py-2 font-mono text-[11px] text-muted-foreground">
              The Lunara mascot
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Current direction */}
      <section className="bg-secondary">
        <div className={`${wrap} grid gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16`}>
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>Current direction</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground">Four areas of work.</h2>
            <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-muted-foreground">
              These are the goals Lunara is being built toward. They are planned and in progress — not finished features.
            </p>
          </div>
          <ol className="border-t border-border">
            {focusAreas.map((f) => (
              <li key={f.n} className="grid grid-cols-[3rem_1fr] gap-x-4 gap-y-2 border-b border-border py-6 md:grid-cols-[3.5rem_16rem_1fr] md:gap-x-8">
                <span className="font-mono text-sm text-accent">{f.n}</span>
                <div>
                  <h3 className="text-lg font-medium text-foreground">{f.title}</h3>
                  <div className="mt-1"><Status /></div>
                </div>
                <p className="col-start-2 max-w-[60ch] text-sm leading-relaxed text-muted-foreground md:col-start-auto">{f.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Split: reproducible configs */}
      <section className="border-y border-border">
        <div className={`${wrap} grid items-center gap-10 py-16 md:py-20 lg:grid-cols-2 lg:gap-20`}>
          <LuaSketch />
          <div>
            <Eyebrow>Reproducible configurations</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-foreground md:text-4xl">Describe a system once.</h2>
            <p className="mt-4 max-w-[52ch] leading-relaxed text-muted-foreground">
              The idea: a Lua file describes the setup you want, so the same configuration can be brought up again on another machine. The format is still being designed — the example is only a sketch.
            </p>
          </div>
        </div>
      </section>

      {/* Project identity */}
      <section>
        <div className={`${wrap} grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-end md:py-20`}>
          <div className="max-w-[60ch]">
            <Eyebrow>The project</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-foreground">Small, independent, and evolving.</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Lunara is an independent project developed in the open. Things change as the work moves forward. The source and its history live on GitHub.
            </p>
            <RepoInfo />
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={btn({ variant: "outline" })}>
              github.com/Cgtlpa/Lunara-Linux <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <Link to="/downloads" className={btn()}>Downloads</Link>
          </div>
        </div>
      </section>
    </>
  );
}
