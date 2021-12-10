import { ModuleProcessor } from '../ModuleProcessor';
import { Modules } from '@stupidassistant/examples';
import type { Module } from '@stupidassistant/types';

describe('ModuleProcessor', () => {
  it('toJSON', () => {
		const m = Modules.list.HelloWorld as Module;
		const e = new ModuleProcessor(m);
		const json = e.toJSON();

    expect(json.name).toEqual(m.name);
    expect(Object.keys(json.lambdas).sort()).toEqual(Object.keys(m.lambdas).sort());
  });

  it('fromJSON', () => {
		const m = Modules.list.HelloWorld as Module;
		const e = new ModuleProcessor(m);
		const json = e.toJSON();
		const e2 = ModuleProcessor.fromJSON(json);

    expect(e2.config.name).toEqual(m.name);
    expect(Object.keys(e2.config.lambdas).sort()).toEqual(Object.keys(m.lambdas).sort());
  });
});
