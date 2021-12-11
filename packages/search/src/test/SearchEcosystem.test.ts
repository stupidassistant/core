import SearchEcosystem from '../SearchEcosystem';

describe('SearchEcosystem', () => {
  it(`Empty Search`, () => {
    expect(SearchEcosystem({
      modules: {},
      slots: {}
    })("Test")).toBeNull();
  })
})