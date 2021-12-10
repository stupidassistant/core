import type { Lambda, Module, ModuleJSON } from '@stupidassistant/types';
import { ObjMap } from './utils';

export class ModuleProcessor {
	constructor(readonly config: Module) {}

	public toJSON(): ModuleJSON {
		return {
			...this.config,
			lambdas: ObjMap(this.config.lambdas, (_, v) => ({
				phrases: v.phrases,
				lambda: v.lambda.toString()
			}))
		};
	}

	public static fromJSON(json: ModuleJSON): ModuleProcessor {
		return new ModuleProcessor({
			...json,
			lambdas: ObjMap(json.lambdas, (_, v) => ({
				phrases: v.phrases,
				lambda: eval(`(${v.lambda})`) as Lambda
			}))
		});
	}
}