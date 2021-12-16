export interface SlotBase {
	name: string,
	type: string
}

export interface CompiledSlotBase extends SlotBase {
	acceptingRegex: string
}

export interface EnumSlot extends SlotBase {
	type: "enum",
	map: Record<string, string[]>
}

export interface ListSlot extends SlotBase {
	type: "list",
	list: string[]
}

export interface RegexSlot extends SlotBase {
	type: "regex",
	regex: string
}

export interface CompositeSlot extends SlotBase {
	type: "composite",
	slots: ["slot"|"str", string][]
}

// export interface MutationSlot extends SlotBase {
// 	type: "function",
// 	regex: string,
// 	transform: (text: string) => {
// 		id: string,
// 		value: string
// 	} 
// }

export type Slot = EnumSlot | ListSlot | RegexSlot | CompositeSlot;

export type CompiledSlot = Slot & CompiledSlotBase;
export type SlotJSON = CompiledSlot;
export type SlotInstance = CompiledSlot;

export interface CompiledSlotBase extends SlotBase {
	acceptingRegex: string,
	regexMap?: Record<string, string>[],
	transform?: (str: string) => (string | {
		id: string,
		value: string
	})[]
}
