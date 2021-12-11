import type { Module } from "@stupidassistant/types";

export const HelloWorld: Module = {
	name: "SlotWeather",
	lambdas: {
		'WhatIsTheWeatherOn': {
			phrases: ["what is the weather on <day>"],
			slots: {
        "day": "DayOfWeek"
      },
			lambda: (req, res) => {
				return res.speak("hello world");
			}
		}
	}
};