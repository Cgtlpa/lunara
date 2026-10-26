export const GITHUB_URL = "https://github.com/Cgtlpa/Lunara-Linux";

export type Edition = {
  id: string;
  name: string;
  base: string;
  description: string;
  /** Set to a real, verified ISO URL once a release exists. */
  downloadUrl: string | null;
};

export const editions: Edition[] = [
  { id: "arch", name: "Lunara Arch", base: "Arch Linux", description: "A Lunara edition built on Arch Linux, following its rolling-release base.", downloadUrl: null },
  { id: "void", name: "Lunara Void", base: "Void Linux", description: "A Lunara edition built on Void Linux and its independent toolchain.", downloadUrl: null },
  { id: "independent", name: "Lunara Independent", base: "Independent", description: "Lunara's own distribution direction, separate from the Arch and Void bases.", downloadUrl: null },
];

/** Development focus areas. These are goals, not finished features. */
export const focusAreas = [
  {
    n: "01",
    title: "Reproducible configurations",
    text: "Use Lua configuration files to describe a desired system setup and make it easier to reproduce that configuration on another machine.",
    tag: "lua",
  },
  {
    n: "02",
    title: "Package manager rework",
    text: "Improve package management, focusing on correctness, reliability, dependency handling, and a more predictable user experience.",
    tag: "pkg",
  },
  {
    n: "03",
    title: "InstantWM desktop",
    text: "Make InstantWM the foundation of Lunara's desktop experience.",
    tag: "wm",
  },
  {
    n: "04",
    title: "Quality-of-life improvements",
    text: "Improve everyday system setup and use with practical refinements rather than unnecessary features.",
    tag: "qol",
  },
];
