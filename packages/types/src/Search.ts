export type EcosystemLandscape = {
  modules: {
    [moduleId: string]: {
      lambdas: {
        [lambdaId: string]: {
          phrases: string[],
          slots: string[]
        }
      }
    },
  },
  slots: {
    [slotId: string]: {
      acceptRegex: string,
    }
  }
};

export type Query = (string: string) => [string, string]|null;
export type QueryList = (string: string) => [string, string][];
export type QueryRanking = (string: string) => [string, string, number][]