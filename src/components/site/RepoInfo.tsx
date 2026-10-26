import { useEffect, useState } from "react";

type Repo = { stargazers_count: number; forks_count: number; pushed_at: string; language: string | null };

/** Shows live data only if the GitHub API answers; renders nothing otherwise. */
export function RepoInfo() {
  const [repo, setRepo] = useState<Repo | null>(null);
  useEffect(() => {
    fetch("https://api.github.com/repos/Cgtlpa/Lunara-Linux")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => d && typeof d.stargazers_count === "number" && setRepo(d))
      .catch(() => {});
  }, []);
  if (!repo) return null;
  const items = [
    ["Stars", repo.stargazers_count],
    ["Forks", repo.forks_count],
    ...(repo.language ? [["Language", repo.language]] : []),
    ["Last push", new Date(repo.pushed_at).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })],
  ];
  return (
    <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs">
      {items.map(([k, v]) => (
        <div key={k as string} className="flex gap-2">
          <dt className="text-muted-foreground">{k}</dt>
          <dd className="text-foreground">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
