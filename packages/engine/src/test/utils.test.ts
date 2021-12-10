import { ObjMap } from '../utils';

describe('Utils', () => {
	describe('ObjMap', () => {
		it('testing', () => {
			expect(ObjMap({
				a: 0
			}, () => 1)).toEqual({
				a: 1
			});

			expect(ObjMap({
				a: "a",
				b: "b"
			}, (_, v) => `${v}2`)).toEqual({
				a: "a2",
				b: "b2"
			});
		});
	});
});
