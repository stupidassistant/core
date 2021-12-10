
import type { LambdaInput } from "@stupidassistant/types";

export default class Request implements LambdaInput {
	public date = Date;
	
	constructor(readonly text: string) {};
};