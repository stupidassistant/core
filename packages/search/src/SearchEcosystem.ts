import type { Query, EcosystemLandscape } from '@stupidassistant/types'

const SearchEcosystem = (ecosystem: EcosystemLandscape): Query => (phrase: string) => {
  for (const [mId, m] of Object.entries(ecosystem.modules)) {
    for (const [lId, l] of Object.entries(m.lambdas)) {
      for (const p of l.phrases) {
        if (p.indexOf("<") == -1) {
          if (new RegExp(p).test(phrase))
            return [mId, lId];
        } else {
          const sections = p.split(/(<(?=\w))|((?!\w)>)/g);
          for (let i=1; i<sections.length; i+=2) {
            const slotId = sections[i];
            if (slotId) {
              const slot = ecosystem.slots[slotId];
              if (slot) {
                sections[i] = slot.acceptRegex;
              }
            }
          }
          const newP = sections.join('');
          if (new RegExp(newP).test(phrase))
            return [mId, lId];
        }
      }
    }
  }

  return null;
};

export default SearchEcosystem;
