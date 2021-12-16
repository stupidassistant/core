import type { LambdaBlueprintBuilder as LambdaBlueprintBuilderI } from '@stupidassistant/types'

export const LambdaBlueprintBuilder: LambdaBlueprintBuilderI = (lambda) => ({
  phrases: lambda.phrases,
  slots: lambda.slots || {}
});