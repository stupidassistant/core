import { Modules } from '@stupidassistant/examples';
import Request from '../Request';
import Responce from '../Responce';

describe('Module Testing', () => {
	Object.keys(Modules.validationData).map(mId => {
		const moduleTestData = Modules.validationData[mId];
		const moduleData = Modules.list[mId];

		if (!!moduleData && !!moduleTestData)
			it(`Testing: ${mId}`, () => {
				expect(moduleData).not.toBeNull();
				expect(moduleTestData).not.toBeNull();
				
				Object.keys(moduleTestData.lambdasChecks).forEach(lambdaId => {
					const lambdaTestData = moduleTestData.lambdasChecks[lambdaId];
					const lambda = moduleData.lambdas[lambdaId];

					expect(lambdaTestData).not.toBeNull();
					expect(lambda).not.toBeNull();
					if (!!lambda && !!lambdaTestData) {
						expect(lambda.lambda(new Request(lambdaTestData.input), new Responce())).toEqual(lambdaTestData.output);
					}
				});
			})
	});
})