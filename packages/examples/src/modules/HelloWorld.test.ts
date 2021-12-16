import type { ModuleValidationData } from "@stupidassistant/types";

export const HelloWorld: ModuleValidationData = {
	name: "HelloWorld",
	lambdasChecks: {
		'HelloWorld': {
			input: "hello world",
			output: {
				speakText: "hello world"
			}
		}
	}
}