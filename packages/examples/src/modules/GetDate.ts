import type { Module } from "@stupidassistant/types";

export const GetDate: Module = {
	name: "GetDate",
	lambdas: {
		'GetDate': {
			phrases: ["get date"],
			lambda: (req, res) => {
				const d = new req.date();
				return res.speak(`${d.getDate()}`);
			}
		}
	}
};