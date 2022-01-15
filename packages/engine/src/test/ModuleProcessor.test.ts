import { ModuleProcessor } from '../ModuleProcessor';
import { Modules } from '@stupidassistant/examples';

describe('ModuleProcessor', () => {
  it('toJSON', () => {
		const m = Modules.list.HelloWorld;
    if (m != undefined) {
      const e = new ModuleProcessor(m);
      const json = e.toJSON();

      expect(json.name).toEqual(m.name);
      // expect(Object.entries(json.lambdas).map(v => ({
      //   id: v[0],
      //   phrases: v[1].phrases,
      //   slots: v[1].slots
      // }))).toStrictEqual(Object.entries(m.lambdas).map(v => ({
      //   id: v[0],
      //   phrases: v[1].phrases,
      //   slots: v[1].slots
      // })));
    }
  });

  it('fromJSON', () => {
		const m = Modules.list.HelloWorld;
    if (m != undefined) {
      const e = new ModuleProcessor(m);
      const json = e.toJSON();
      const e2 = ModuleProcessor.fromJSON(json);

      expect(e2.config.name).toEqual(m.name);
      // expect(Object.entries(e2.config.lambdas).map(v => ({
      //   id: v[0],
      //   phrases: v[1].phrases,
      //   slots: v[1].slots
      // }))).toStrictEqual(Object.entries(m.lambdas).map(v => ({
      //   id: v[0],
      //   phrases: v[1].phrases,
      //   slots: v[1].slots
      // })));
    }
  });
});
