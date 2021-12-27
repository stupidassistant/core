import type { QueryResult, SlotLandscape } from "@stupidassistant/types";
import { GetSlotRegexStartsWith, SlotRegexStartsWith } from "./SlotRegexTest";

export const ExtractParamsFromQuery = (input: QueryResult, slots: SlotLandscape): Record<string, {
  slotId: string,
  value: string
}> => {
  let phrase = input.phrase;
  const params: Record<string, {
    slotId: string,
    value: string
  }> = {};
  const p: string[] = input.keyPhrase.split(/<|>/g);

  for (let i=0; i<p.length; i++) {
    if (i % 2 == 0) {
      if (phrase.indexOf(p[i] || "") != 0) {
        throw "Not Matching Phrase";
      } else {
        phrase = phrase.replace(p[i] || "", '');
      }
    } else {
      const slotLabel = p[i] || "";
      const slotId = input.slots[slotLabel];

      if (slotId) {
        const slot = slots[slotId];
        if (slot) {
          if(!SlotRegexStartsWith(phrase, slot.acceptingRegex)) {
            throw "Not Matching Phrase";
          } else {
            params[slotLabel] = {
              slotId,
              value: GetSlotRegexStartsWith(phrase, slot.acceptingRegex) || ""
            }
            phrase = phrase.replace(slot.acceptingRegex || "", '');
          }
        }
      }
    }
  }

  return params;
}