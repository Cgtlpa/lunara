import { createFileRoute, Link } from "@tanstack/react-router";
import { btn } from "@/components/site/Button";
import { mascotUrl } from "@/components/site/Brand";
import { Directions, Eyebrow } from "@/components/site/Section";
import { GITHUB_URL } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lunara Linux" },
      { name: "description", content: "What Lunara Linux is and the three directions it is developing: Arch-based, Void-based and independent." },
      { property: "og:title", content: "About — Lunara Linux" },
      { property: "og:description", content: "An evolving, independent Linux distribution project with three development directions." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr] md:items-center md:py-24">
        <div className="animate-fade-up">
          <Eyebrow>About Lunara</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Linux, on your own terms.</h1>
          <div className="mt-6 max-w-xl space-y-4 leading-relaxed text-muted-foreground">
            <p>Lunara Linux is an independent distribution project exploring different ways to build and experience a Linux system.</p>
            <p>Rather than committing to a single base, Lunara is developed along three directions — two built on established distributions and one of its own. None of them are released yet; each is a work in progress.</p>
            <p>The project is evolving, and its source is developed in the open on GitHub.</p>
          </div>
        </div>
        <img src={mascotUrl} alt="" width={900} height={760} className="mx-auto w-2/3 opacity-90 md:w-full" />
      </section>
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="mb-10 text-2xl font-semibold tracking-tight text-foreground">Three directions</h2>
          <Directions />
          <div className="mt-12 flex flex-wrap gap-3">
            <Link to="/downloads" className={btn()}>See downloads</Link>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={btn({ variant: "outline" })}>View on GitHub</a>
          </div>
        </div>
      </section>
    </>
  );
}
