import isValidISBN10 from "../js/isValidISBN10.js";

describe("isValidISBN10", () => {
  it("should return true for a valid ISBN-10 without dashes", () => {
    expect(isValidISBN10("0684843285")).toBe(true);
  });

  it("should return true for a valid ISBN-10 with dashes", () => {
    expect(isValidISBN10("0-684-84328-5")).toBe(true);
  });

  it("should return true for a valid ISBN-10 ending with X", () => {
    expect(isValidISBN10("0-8044-2957-X")).toBe(true);
  });

  it("should return false for an ISBN-10 with incorrect length", () => {
    expect(isValidISBN10("0-684-84328")).toBe(false);
    expect(isValidISBN10("0-684-84328-5123")).toBe(false);
  });

  it("should return false for an ISBN-10 with invalid characters", () => {
    expect(isValidISBN10("0-ASD-84328-5")).toBe(false);
  });

  it("should return false for an invalid ISBN-10", () => {
    expect(isValidISBN10("1234567890")).toBe(false);
  });
});
