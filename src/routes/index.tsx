import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github } from "lucide-react";
import { btn } from "@/components/site/Button";
import { mascotUrl } from "@/components/site/Brand";
import { Directions, Eyebrow } from "@/components/site/Section";
import { RepoInfo } from "@/components/site/RepoInfo";
import { GITHUB_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lunara Linux — A different kind of Linux" },
      { name: "description", content: "Lunara is an independent Linux distribution project with Arch-based, Void-based and independent directions." },
      { property: "og:title", content: "Lunara Linux — A different kind of Linux" },
      { property: "og:description", content: "An independent Linux distribution project built around a simple idea: a system should feel like your own." },
    ],
  }),
  component: Index,
});

const principles = [
  ["Freedom", "Room to shape the system the way you want it."],
  ["Identity", "A distinctive, recognizable look and feel."],
  ["Practicality", "Favoring what works over unnecessary complexity."],
  ["Growth", "An independent project that evolves over time."],
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="starfield pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.1fr_1fr] md:pb-28 md:pt-24">
          <div className="animate-fade-up">
            <Eyebrow>Independent Linux project</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              A different kind<br />of <span className="text-primary">Linux.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Lunara is an independent Linux distribution project built around a simple idea: a system should feel like your own. Explore a different approach to Linux, shaped by freedom, flexibility, and a distinctive identity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#about" className={btn()}>Explore Lunara <ArrowRight className="h-4 w-4" aria-hidden /></a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={btn({ variant: "outline" })}>
                <Github className="h-4 w-4" aria-hidden /> View on GitHub
              </a>
            </div>
            <p className="mt-10 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden /> Independent project · in development
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md animate-fade-up md:max-w-none">
            <div className="halo animate-breathe absolute inset-[-10%]" aria-hidden />
            <img src={mascotUrl} alt="The Lunara mascot, a lunar winged creature in blue, purple and white" width={900} height={760} className="relative w-full" />
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-14 border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-2 md:gap-16">
            <div>
              <Eyebrow>About</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Linux, on your own terms.</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground md:pt-8">
              Lunara Linux is an independent distribution project exploring different ways to build and experience a Linux system. With multiple base options and its own visual identity, Lunara is a project that continues to evolve. It currently follows three development directions.
            </p>
          </div>
          <div className="mt-14"><Directions /></div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Eyebrow>Intentions</Eyebrow>
          <ul className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(([t, d]) => (
              <li key={t} className="border-l border-accent/50 pl-5">
                <h3 className="font-medium text-foreground">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-secondary">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Eyebrow>Source</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">Built in the open.</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Lunara is an independent project. Follow its development, explore the source code, and see what's taking shape.
            </p>
            <p className="mt-6 font-mono text-xs text-muted-foreground">github.com/Cgtlpa/Lunara-Linux</p>
            <RepoInfo />
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={btn()}>
              <Github className="h-4 w-4" aria-hidden /> Explore the repository
            </a>
            <Link to="/downloads" className={btn({ variant: "outline" })}>Downloads</Link>
          </div>
        </div>
      </section>
    </>
  );
}
