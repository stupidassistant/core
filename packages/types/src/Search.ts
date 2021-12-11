type SearchMapRealEstate = {
  modules: {
    [moduleId: string]: {
      lambdas: string[],
      slots: string[]
    },
  },
  slots: {
    [slotId: string]: {
      acceptRegex: string,
    }
  }
}

interface Search {
  queryList(string: string): string[]

  querySmart(string: string): {
    [moduleId: string]: number
  }
}