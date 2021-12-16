import type { EcosystemLandscape } from '@stupidassistant/types';
import SearchEcosystem from '../SearchEcosystem';

describe('SearchEcosystem', () => {
  it(`Empty Search`, () => {
    expect(SearchEcosystem({
      modules: {},
      slots: {}
    })("Test")).toBeNull();
  })
  
  it(`Plain string`, () => {
    const config: EcosystemLandscape = {
      modules: {
        "HelloWorldModule": {
          lambdas: {
            "HelloWorld": {
              phrases: ["hello world"],
              slots: {}
            }
          }
        }
      },
      slots: {}
    };

    expect(SearchEcosystem(config)("")).toBeNull();
    expect(SearchEcosystem(config)("test")).toBeNull();
    expect(SearchEcosystem(config)("hello world")).toStrictEqual({
      moduleId: "HelloWorldModule",
      lambdaId: "HelloWorld"
    });
  })
  
  it(`Slots`, () => {
    const config: EcosystemLandscape = {
      modules: {
        "SlotModule": {
          lambdas: {
            "NormalLambda": {
              phrases: ["test"],
              slots: {}
            },
            "InvalidSlot": {
              phrases: ["test <abc>"],
              slots: {}
            },
            "ValidSlot": {
              phrases: ["test2 <abc>"],
              slots: {
                abc: "ExampleSlot"
              }
            }
          }
        }
      },
      slots: {
        "ExampleSlot": {
          acceptingRegex: "one|two|three"
        }
      }
    };

    expect(SearchEcosystem(config)("")).toBeNull();
    expect(SearchEcosystem(config)("test")).toStrictEqual({
      moduleId: "SlotModule",
      lambdaId: "NormalLambda"
    });

    expect(SearchEcosystem(config)("test one")).toBeNull();
    
    expect(SearchEcosystem(config)("test2 one")).toStrictEqual({
      moduleId: "SlotModule",
      lambdaId: "ValidSlot"
    });
  })
})