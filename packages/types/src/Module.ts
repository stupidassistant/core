import type { QueryResult, SlotLandscape } from ".";

export type LambdaId = string;
export type LambdaString = string;
export type LambdaPhrases = string[];

export type Params = Record<string, {
	slotId: string,
	value: string
}>

export type LambdaInput = {
	text: string,
	date: DateConstructor,
	params: Params
};

export type LambdaConstructor = QueryResult & {
	params: Params
}

export type LambdaOutput = {
	speak: (text: string) => LambdaOutput;
	toJSON: () => LambdaOutputJSON
};

export type LambdaOutputJSON = {
	speakText?: string;
};

export type Lambda = (request: LambdaInput, responce: LambdaOutput) => LambdaOutput;
export type LambdaInstance = (input: QueryResult, slots: SlotLandscape) => LambdaOutputJSON;

export type LambdaConfig<LambdaStorage = Lambda|LambdaInstance|LambdaString> = {
	phrases: LambdaPhrases,
	slots?: {
		[alias: string]: string
	},
	lambda: LambdaStorage
}

export type Module = {
	name: string,
	lambdas: Record<LambdaId, LambdaConfig<Lambda>>
};

export type ModuleInstance = {
	name: string,
	lambdas: Record<LambdaId, LambdaConfig<LambdaInstance>>
};

export type ModuleJSON = {
	name: string,
	lambdas: Record<LambdaId, LambdaConfig<LambdaString>>
};

export type ModuleValidationData = {
	name: string,
	lambdasChecks: Record<LambdaId, {
		input: Omit<LambdaConstructor, "moduleId"|"lambdaId">,
		slots: SlotLandscape,
		output: LambdaOutputJSON
	}>
};