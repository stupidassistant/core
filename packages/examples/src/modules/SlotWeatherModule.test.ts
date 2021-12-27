import type { ModuleValidationData } from "@stupidassistant/types";

export const SlotWeather: ModuleValidationData = {
	name: "SlotWeather",
	lambdasChecks: {
		'WhatIsTheWeatherOn': {
			input: {
				keyPhrase: "what is the weather on <day>",
				params: {},
				phrase: "what is the weather on monday",
				slots: {
					day: "daysOfWeek"
				}
			},
			slots: {
				"daysOfWeek": {
					acceptingRegex: "monday|tuesday"
				}
			},
			output: {
				speakText: "it is raining on monday"
			}
		}
	}
}