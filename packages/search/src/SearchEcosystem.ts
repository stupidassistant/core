import type { Query, EcosystemLandscape, QueryResult } from '@stupidassistant/types'

const SearchEcosystem = (ecosystem: EcosystemLandscape): Query => (phrase: string): QueryResult|null => {
  for (const [mId, m] of Object.entries(ecosystem.modules)) {
    for (const [lId, l] of Object.entries(m.lambdas)) {
      for (const p of l.phrases) {
        if (p.indexOf("<") == -1) {
          if (new RegExp(`^${p}$`).test(phrase)) {
            return {
              moduleId: mId,
              lambdaId: lId,
              phrase,
              keyPhrase: p,
              slots: l.slots
            };
          }
        } else {
          const sections = p.split(/<|>/g);
          for (let i=1; i<sections.length; i+=2) {
            const slotLabel = sections[i];
            if (slotLabel) {
              const slotId = l.slots[slotLabel];
              if (slotId) {
                const slot = ecosystem.slots[slotId];
                if (slot)
                  sections[i] = slot.acceptingRegex;
              }
            }
          }
          const newP = sections.join('');
          if (new RegExp(`^${newP}$`).test(phrase))
            return {
              moduleId: mId,
              lambdaId: lId,
              phrase,
              keyPhrase: p,
              slots: l.slots
            };
        }
      }
    }
  }

  return null;
};

export default SearchEcosystem;
