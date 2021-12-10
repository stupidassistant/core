import type { ModuleValidationData } from "@stupidassistant/types";

export const HelloWorld: ModuleValidationData = {
	name: "HelloWorld",
	lambdasChecks: {
		'HelloWorld': {
			input: "Jack",
			output: {
				speakText: "hello world"
			}
		}
	}
}