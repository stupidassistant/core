import type { ModuleJSON, LambdaInstance, ModuleInstance as MInstance, LambdaOutputJSON } from '@stupidassistant/types';
import LambdaLoader from './LambdaLoader';
import { ObjMap } from './utils';

class ModuleInstance {
	constructor(readonly config: MInstance) {}

	public static fromJSON(json: ModuleJSON): ModuleInstance {
		return new ModuleInstance({
			...json,
			lambdas: ObjMap(json.lambdas, (_, v) => ({
				phrases: v.phrases,
				lambda: LambdaLoader(v.lambda) as LambdaInstance
			}))
		});
	}

	run(str: string): LambdaOutputJSON | null {
		const keys: string[] = Object.keys(this.config.lambdas);
		if (keys.length == 0)
			return null;

		const key: string = keys[0] as string;
		const lambda = this.config.lambdas[key]?.lambda;
		if (!lambda)
			return null;
		
		return lambda(str).toJSON();
	}
}

export default ModuleInstance;