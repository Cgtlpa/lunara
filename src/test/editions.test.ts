import { describe, expect, it } from "vitest";
import { editions } from "@/lib/site";

describe("editions", () => {
  it("has no ISO available yet", () => {
    expect(editions.map((e) => e.downloadUrl)).toEqual([null, null, null]);
  });
});
