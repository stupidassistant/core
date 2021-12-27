import { ExtractParamsFromQuery } from "../ExtractParamsFromQuery";

describe('ExtractParamsFromQuery', () => {
  it(`No Params`, () => {
    expect(ExtractParamsFromQuery({
      keyPhrase: "test",
      phrase: "test",
      slots: {},
      
      lambdaId: "",
      moduleId: "",
    }, {})).toStrictEqual({})
  });

  
  it(`Has Params`, () => {
    expect(ExtractParamsFromQuery({
      keyPhrase: "test <abc>",
      phrase: "test a",
      slots: {
        "abc": "abc"
      },
      
      lambdaId: "",
      moduleId: "",
    }, {
      "abc": {
        acceptingRegex: "a|b|c"
      }
    })).toStrictEqual({
      abc: {
        slotId: "abc",
        value: "a"
      }
    })
  });
})