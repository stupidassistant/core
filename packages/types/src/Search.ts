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

export type EcosystemLandscape = {
  modules: {
    [moduleId: string]: ModuleBlueprint
  },
  slots: {
    [slotId: string]: SlotBlueprint
  }
};

export type QueryResult = {
  moduleId: string,
  lambdaId: string
};

export type RankedQueryResult = {
  moduleId: string,
  lambdaId: string,
  rank: number
};

export type Query = (string: string) => QueryResult|null;
export type QueryList = (string: string) => QueryResult[];
export type QueryRanking = (string: string) => RankedQueryResult[]