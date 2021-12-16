import type { SlotBlueprintBuilder as SlotBlueprintBuilderI } from '@stupidassistant/types';

export const SlotBlueprintBuilder: SlotBlueprintBuilderI = (slot) => ({
  acceptingRegex: slot.acceptingRegex
});