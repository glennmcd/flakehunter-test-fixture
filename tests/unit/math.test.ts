import { describe, expect, it } from "vitest";

describe("MathSuite", () => {
  it("adds", () => {
    expect(2 + 3).toBe(5);
  });

  it("multiplies", () => {
    expect(4 * 5).toBe(20);
  });

  it("divides", () => {
    expect(9 / 3).toBe(3);
  });
});
