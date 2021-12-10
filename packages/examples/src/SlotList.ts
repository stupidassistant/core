import type { Slot } from "@stupidassistant/types";

import { Confirmation } from "./slots/Confirmation";
import { DaysOfWeek } from "./slots/DaysOfWeek";

export const list: Record<string, Slot> = {
	Confirmation,
	DaysOfWeek
};