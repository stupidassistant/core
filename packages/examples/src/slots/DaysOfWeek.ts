import type { Slot } from "@stupidassistant/types";

export const DaysOfWeek: Slot = {
	name: "DaysOfWeek",
	type: "enum",
	map: {
		"monday": ["monday", "mon"],
		"tuesday": ["tuesday", "tues"],
		"wednesday": ["wednesday", "wed"],
		"thursday": ["thursday", "thur"],
		"friday": ["friday", "fri"],
		"saturday": ["saturday", "sat"],
		"sunday": ["sunday", "sun"],
	}
};