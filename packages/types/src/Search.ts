import type { Module, LambdaConfig } from "./Module";
import type { CompiledSlot } from "./Slot";

export type LambdaBlueprint = {
  phrases: string[],
  slots: {
    [slotId: string]: string
  }
};
export type LambdaBlueprintBuilder = (slot: LambdaConfig) => LambdaBlueprint;

export type ModuleBlueprint = {
  lambdas: {
    [lambdaId: string]: LambdaBlueprint
  }
};
export type ModuleBlueprintBuilder = (slot: Module) => ModuleBlueprint;

export type SlotBlueprint = {
  acceptingRegex: string,
};
export type SlotBlueprintBuilder = (slot: CompiledSlot) => SlotBlueprint;

export type SlotLandscape = {
  [slotId: string]: SlotBlueprint
};

export type ModuleLandscape = {
  [moduleId: string]: ModuleBlueprint
};

export type EcosystemLandscape = {
  modules: ModuleLandscape,
  slots: SlotLandscape
};

export type SlotRelabeling = {
  [label: string]: string
};

export type QueryResult = {
  moduleId: string,
  lambdaId: string,
  phrase: string,
  keyPhrase: string,
  slots: SlotRelabeling
};

export type RankedQueryResult = QueryResult & {
  rank: number
};

export type Query = (string: string) => QueryResult|null;
export type QueryList = (string: string) => QueryResult[];
export type QueryRanking = (string: string) => RankedQueryResult[]