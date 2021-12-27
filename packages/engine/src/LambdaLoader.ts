import type { LambdaInstance, LambdaOutputJSON, QueryResult, SlotLandscape } from '@stupidassistant/types';
import { Responce } from '@stupidassistant/classes';
import { PhraseProcessor } from '@stupidassistant/functions';
import { VM } from "vm2";

const LambdaLoader = (code: string): LambdaInstance => {
	return (input: QueryResult, slots: SlotLandscape) => {
		const vm = new VM({
			timeout: 1000,
			sandbox: {
				request: PhraseProcessor(input, slots),
				responce: new Responce()
			}
		});

		return vm.run(`(${code})(request, responce)`) as LambdaOutputJSON;
	}
};

export default LambdaLoader;