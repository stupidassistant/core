import { SlotRegexTest } from "../SlotRegexTest";

describe('SlotRegexTest', () => {
  it(`Basic Tests`, () => {
    expect(SlotRegexTest("a", "a")).toBe(true);
    expect(SlotRegexTest("a", "b")).toBe(false);
    expect(SlotRegexTest("a", "a|b|c")).toBe(true);
    expect(SlotRegexTest("b", "a|b|c")).toBe(true);
    expect(SlotRegexTest("c", "a|b|c")).toBe(true);
    expect(SlotRegexTest("d", "a|b|c")).toBe(false);
    expect(SlotRegexTest("bat", "(a|b|c)")).toBe(false);
    expect(SlotRegexTest("bat", "(a|b|c|bat)")).toBe(true);
  });
})