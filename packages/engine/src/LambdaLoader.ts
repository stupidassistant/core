import { VM } from "vm2";

import Request from './Request';
import Responce from './Responce';

const LambdaLoader = (str: string): any => {
	return (text: string) => {
		const vm = new VM({
			timeout: 1000,
			sandbox: {
				request: new Request(text),
				responce: new Responce()
			}
		});

		return vm.run(`(${str})(request, responce)`);
	}
};

export default LambdaLoader;