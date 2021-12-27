export const SlotRegexTest = (phrase: string, regex: string): boolean => {
  return new RegExp(`^(${regex})$`).test(phrase);
}

export const SlotRegexStartsWith = (phrase: string, regex: string): boolean => {
  return new RegExp(`^(${regex})$`).test(phrase);
}

export const GetSlotRegexStartsWith = (phrase: string, regex: string): string|null => {
  return ([...new RegExp(`^(${regex})$`).exec(phrase) || []])[0] || null;
}