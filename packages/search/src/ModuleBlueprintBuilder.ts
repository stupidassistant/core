import type { LambdaBlueprint, ModuleBlueprintBuilder as ModuleBlueprintBuilderI } from '@stupidassistant/types'
import { LambdaBlueprintBuilder } from './LambdaBlueprintBuilder';

export const ModuleBlueprintBuilder: ModuleBlueprintBuilderI = (module) => ({
  lambdas: Object.entries(module.lambdas).reduce((o: Record<string, LambdaBlueprint>, [k, v]) => {
    o[k] = LambdaBlueprintBuilder(v);
    return o;
  }, {})
});