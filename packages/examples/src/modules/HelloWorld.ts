import type { Module } from "@stupidassistant/types";

export const HelloWorld: Module = {
	name: "HelloWorld",
	lambdas: {
		'HelloWorld': {
			phrases: ["hello"],
			slots: [],
			lambda: (req, res) => {
				return res.speak("hello world");
			}
		}
	}
};