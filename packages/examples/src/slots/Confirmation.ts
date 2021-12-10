import type { Slot } from "@stupidassistant/types";

export const Confirmation: Slot = {
	name: "Confirmation",
	type: "enum",
	map: {
		"yes": ["yes", "confirm", "yep", "sure"],
		"no": ["no", "cancel", "nope", "ignore", "skip"]
	}
};