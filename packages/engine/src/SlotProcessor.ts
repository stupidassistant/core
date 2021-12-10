import type { Slot, SlotJSON } from '@stupidassistant/types';

export class SlotProcessor {
	constructor(readonly config: Slot) {}

	public toJSON(): SlotJSON {
		let acceptingRegex: string = "";

		switch (this.config.type) {
			case "list":
				acceptingRegex = `(${this.config.list.join('|')})`;
				break;
			case "enum":
				acceptingRegex = `(${Object.values(this.config.map).filter(v => v.length != 0).map(v => v.join('|')).join('|')})`;
				break;
			case "regex":
				acceptingRegex = `(${this.config.regex})`;
				break;
			case "composite":
				acceptingRegex = `(${this.config.slots.map(([type, value]) => type == "slot" ? `{${value}}` : value).join('|')})`;
				break;
		}

		return {
			...this.config,
			acceptingRegex
		};
	}

	public static fromJSON(json: SlotJSON): SlotProcessor {
		return new SlotProcessor(json);
	}
}