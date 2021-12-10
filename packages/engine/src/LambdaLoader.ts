import type { LambdaOutputJSON } from '@stupidassistant/types';
import { VM } from "vm2";

import Request from './Request';
import Responce from './Responce';

const LambdaLoader = (str: string): (text: string) => LambdaOutputJSON => {
	return (text: string): LambdaOutputJSON => {
		const vm = new VM({
			timeout: 1000,
			sandbox: {
				request: new Request(text),
				responce: new Responce()
			}
		});

		return vm.run(`(${str})(request, responce)`) as LambdaOutputJSON;
	}
};

export default LambdaLoader;