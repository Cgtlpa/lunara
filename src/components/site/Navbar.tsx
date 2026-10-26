import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Github } from "lucide-react";
import { Brand } from "./Brand";
import { btn } from "./Button";
import { GITHUB_URL } from "@/lib/site";
import { wrap } from "./Section";

const linkCls = "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <nav aria-label="Main" className={`${wrap} flex h-14 items-center justify-between`}>
        <Brand />
        <div className="hidden items-center gap-7 md:flex">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }}>Home</Link>
          <Link to="/about" className={linkCls} activeProps={{ className: "text-foreground" }}>About</Link>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={`${linkCls} inline-flex items-center gap-1.5`}>
            <Github className="h-4 w-4" aria-hidden /> GitHub
          </a>
          <Link to="/downloads" className={btn({ size: "sm" })}>Downloads</Link>
        </div>
        <button
          className="text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-border px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link to="/" onClick={close} className={linkCls}>Home</Link>
            <Link to="/about" onClick={close} className={linkCls}>About</Link>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={linkCls}>GitHub</a>
            <Link to="/downloads" onClick={close} className={btn({ size: "sm", className: "w-full" })}>Downloads</Link>
          </div>
        </div>
      )}
    </header>
  );
}
