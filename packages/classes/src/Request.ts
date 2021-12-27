
import type { LambdaConstructor, LambdaInput, Params } from "@stupidassistant/types";

export class Request implements LambdaInput {
	public date = Date;
	readonly text: string;
	readonly params: Params;
	
	constructor(input: LambdaConstructor) {
		this.text = input.phrase;
		this.params = input.params;
	}
}