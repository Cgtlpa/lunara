import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { btn } from "@/components/site/Button";
import { mascotUrl } from "@/components/site/Brand";
import { Directions, Eyebrow, Status, wrap } from "@/components/site/Section";
import { focusAreas, GITHUB_URL } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lunara Linux" },
      { name: "description", content: "What Lunara Linux is: an independent distribution project with Arch-based, Void-based and independent directions, Lua configurations and an InstantWM desktop." },
      { property: "og:title", content: "About — Lunara Linux" },
      { property: "og:description", content: "An evolving, independent Linux distribution project and its current development goals." },
    ],
  }),
  component: About,
});

const details: Record<string, string> = {
  lua: "System setup expressed in Lua files, aimed at making a configuration portable between machines.",
  pkg: "Reworking package management with an emphasis on correct dependency handling and predictable behaviour.",
  wm: "The desktop is planned around InstantWM as its foundation.",
  qol: "Smaller refinements to setup and daily use, chosen for practical value.",
};

function About() {
  return (
    <>
      <section className="border-b border-border">
        <div className={`${wrap} grid gap-10 py-14 md:py-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20`}>
          <div className="animate-fade-up">
            <Eyebrow>About Lunara</Eyebrow>
            <h1 className="mt-5 font-serif text-5xl tracking-tight text-foreground md:text-6xl">An independent Linux project.</h1>
            <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-muted-foreground">
              Lunara Linux is an independent distribution project exploring different ways to build and use a Linux system. It is not tied to a company, and nothing has been released yet. What follows is the current direction of the project.
            </p>
          </div>
          <aside className="self-end border-l border-border pl-6">
            <img src={mascotUrl} alt="" width={900} height={760} className="w-40" />
            <dl className="mt-6 space-y-3 font-mono text-xs">
              <div className="flex gap-4"><dt className="w-20 text-muted-foreground">status</dt><dd className="text-foreground">in development</dd></div>
              <div className="flex gap-4"><dt className="w-20 text-muted-foreground">bases</dt><dd className="text-foreground">arch · void · independent</dd></div>
              <div className="flex gap-4"><dt className="w-20 text-muted-foreground">source</dt><dd><a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-primary hover:underline">github</a></dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="bg-secondary">
        <div className={`${wrap} grid gap-8 py-16 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16`}>
          <div>
            <Eyebrow>Bases</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-foreground">Three directions.</h2>
            <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-muted-foreground">
              Rather than one base, Lunara is developed along two established distributions and one of its own.
            </p>
          </div>
          <Directions />
        </div>
      </section>

      <section className="border-y border-border">
        <div className={`${wrap} py-16`}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Development goals</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl tracking-tight text-foreground">What is being worked on.</h2>
            </div>
            <p className="max-w-[44ch] text-sm text-muted-foreground">Goals, not guarantees. Details may change as the work develops.</p>
          </div>
          <div className="mt-10 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((f, i) => (
              <div key={f.n} className={`border-b border-border py-6 sm:px-6 lg:border-b-0 ${i % 2 ? "sm:border-l" : ""} ${i > 0 ? "lg:border-l" : "lg:pl-0"} sm:first:pl-0`}>
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-accent">{f.n}</span><Status />
                </div>
                <h3 className="mt-5 font-medium text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{details[f.tag]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={`${wrap} flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between`}>
          <p className="max-w-[55ch] font-serif text-2xl text-foreground">Follow the work as it happens, or check which editions are on the way.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/downloads" className={btn()}>Downloads</Link>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={btn({ variant: "outline" })}>GitHub <ArrowUpRight className="h-4 w-4" aria-hidden /></a>
          </div>
        </div>
      </section>
    </>
  );
}
