import type { ModuleValidationData } from "@stupidassistant/types";

export const GetDate: ModuleValidationData = {
	name: "GetDate",
	lambdasChecks: {
		'getDate': {
			input: {
				keyPhrase: "get date",
				params: {},
				phrase: "get date",
				slots: {}
			},
			slots: {},
			output: {
				speakText: `${new Date().getDay()}`
			}
		}
	}
}