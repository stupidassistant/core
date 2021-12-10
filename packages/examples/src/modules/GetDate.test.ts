import type { ModuleValidationData } from "@stupidassistant/types";

export const GetDate: ModuleValidationData = {
	name: "GetDate",
	lambdasChecks: {
		'getDate': {
			input: "get date",
			output: {
				speakText: `${new Date().getDay()}`
			}
		}
	}
}