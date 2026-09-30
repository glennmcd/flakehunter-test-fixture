import { describe, expect, it } from "vitest";

describe("FixtureSuite", () => {
  it("stable test always passes", () => {
    expect(1 + 1).toBe(2);
  });

  it("maybe flaky test", () => {
    expect(Math.random()).toBeGreaterThan(0.02);
  });
});
