import type { SlotInstance as SInstance, SlotJSON } from '@stupidassistant/types';

type SlotOccurance = {value: string, index: number};

class SlotInstance {
	constructor(readonly config: SInstance) {}

	public static fromJSON(json: SlotJSON): SlotInstance {
		return new SlotInstance(json);
	}

	public isPresentInString(phrase: string): boolean {
		return new RegExp(this.config.acceptingRegex).test(phrase);
	}

	public getFromString(phrase: string): SlotOccurance[] {
		return [
			...phrase.matchAll(
				new RegExp(this.config.acceptingRegex, 'g')
			)
		].map(v => ({
			value: v[0] as string,
			index: parseInt(v[v.length - 2] as string)
		}));
	}

	public reduceString(phrase: string): {
		phrase: string,
		slotValues: SlotOccurance[]
	} {
		return {
			phrase: phrase,
			slotValues: this.getFromString(phrase)
		}
	}
}

export default SlotInstance;