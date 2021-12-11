import type { Query, EcosystemLandscape } from '@stupidassistant/types'

const SearchEcosystem = (ecosystem: EcosystemLandscape): Query => (phrase: string) => {
  for (let [mId, m] of Object.entries(ecosystem.modules)) {
    for (let [lId, l] of Object.entries(m.lambdas)) {
      for (let p of l.phrases) {
        if (p.indexOf("<") == -1) {
          if (new RegExp(p).test(phrase))
            return [mId, lId];
        } else {
          let sections = p.split(/(\<(?=\w))|((?!\w)\>)/g);
          for (let i=1; i<sections.length; i+=2) {
            let slotId = sections[i];
            if (slotId) {
              let slot = ecosystem.slots[slotId];
              if (slot) {
                sections[i] = slot.acceptRegex;
              }
            }
          }
          let newP = sections.join('');
          if (new RegExp(newP).test(phrase))
            return [mId, lId];
        }
      }
    }
  }

  return null;
};

export default SearchEcosystem;
