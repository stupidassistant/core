import type { LambdaInput, QueryResult, SlotLandscape } from "@stupidassistant/types";
import { Request } from "@stupidassistant/classes";
import { ExtractParamsFromQuery } from "./ExtractParamsFromQuery";

export const PhraseProcessor = (queryResult: QueryResult, slots: SlotLandscape): LambdaInput => {
  return new Request({
    ...queryResult,
    params: ExtractParamsFromQuery(queryResult, slots)
  });
};