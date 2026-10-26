import { Link } from "@tanstack/react-router";
import { Brand } from "./Brand";
import { GITHUB_URL } from "@/lib/site";

const l = "text-sm text-muted-foreground hover:text-foreground transition-colors";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs space-y-3">
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
      <div className="mx-auto max-w-6xl border-t border-border px-5 py-5 font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Lunara Linux
      </div>
    </footer>
  );
}
