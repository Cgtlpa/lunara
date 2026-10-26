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
  { id: "arch", name: "Lunara Arch", base: "Arch Linux", description: "A Lunara edition built on Arch Linux.", downloadUrl: null },
  { id: "void", name: "Lunara Void", base: "Void Linux", description: "A Lunara edition built on Void Linux.", downloadUrl: null },
  { id: "independent", name: "Lunara Independent", base: "Independent", description: "Lunara's independent distribution direction.", downloadUrl: null },
];
