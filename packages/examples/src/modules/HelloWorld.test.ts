import type { ModuleValidationData } from "@stupidassistant/types";

export const HelloWorld: ModuleValidationData = {
	name: "HelloWorld",
	lambdasChecks: {
		'HelloWorld': {
			input: {
				keyPhrase: "hello world",
				params: {},
				phrase: "hello world",
				slots: {}
			},
			slots: {},
			output: {
				speakText: "hello world"
			}
		}
	}
}