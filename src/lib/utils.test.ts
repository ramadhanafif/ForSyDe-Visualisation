import { describe, it, expect } from "vitest";
import { generateRandomString } from "./utils";

describe("generateRandomString", () => {
  it("should generate a string of the specified length", () => {
    const length = 5;
    const result = generateRandomString(length);
    expect(result).toHaveLength(length);
  });

  it("should generate a string containing only alphanumeric characters", () => {
    const result = generateRandomString(10);
    const alphanumericRegex = /^[A-Za-z0-9]+$/;
    expect(result).toMatch(alphanumericRegex);
  });

  it("should generate an empty string when length is 0", () => {
    const result = generateRandomString(0);
    expect(result).toBe("");
  });

  it("should generate different strings on multiple calls", () => {
    const result1 = generateRandomString(10);
    const result2 = generateRandomString(10);
    // While technically they could be the same due to randomness,
    // the probability is extremely low for strings of length 10
    expect(result1).not.toBe(result2);
  });
});
