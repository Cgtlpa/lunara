import { Link } from "@tanstack/react-router";
import { Brand } from "./Brand";
import { wrap } from "./Section";
import { GITHUB_URL } from "@/lib/site";

const l = "text-sm text-muted-foreground hover:text-foreground transition-colors";

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-secondary">
      <div className={`${wrap} flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <Brand />
          <p className="text-sm text-muted-foreground">An independent Linux distribution project.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-6">
          <Link to="/" className={l}>Home</Link>
          <Link to="/about" className={l}>About</Link>
          <Link to="/downloads" className={l}>Downloads</Link>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={l}>GitHub</a>
        </nav>
      </div>
      <div className={`${wrap} flex justify-between border-t border-border py-4 font-mono text-[11px] text-muted-foreground`}>
        <span>© {new Date().getFullYear()} Lunara Linux</span>
        <span>in development</span>
      </div>
    </footer>
  );
}
