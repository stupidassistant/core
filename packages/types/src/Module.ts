export type LambdaId = string;
export type LambdaString = string;
export type LambdaPhrases = string[];

export type LambdaInput = {
	text: string,
	date: DateConstructor
};

export type LambdaOutput = {
	speak: (text: string) => LambdaOutput;
	toJSON: () => LambdaOutputJSON
};

export type LambdaOutputJSON = {
	speakText?: string;
};

export type Lambda = (request: LambdaInput, responce: LambdaOutput) => LambdaOutput;
export type LambdaInstance = (text: string) => LambdaOutput;

export type LambdaConfig<LambdaStorage> = {
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
		input: LambdaString,
		output: LambdaOutputJSON
	}>
};