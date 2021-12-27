import { Modules } from '@stupidassistant/examples';
import LambdaLoader from '../LambdaLoader';

describe('Module Testing', () => {
	Object.keys(Modules.validationData).map(moduleId => {
		const moduleTestData = Modules.validationData[moduleId];
		const moduleData = Modules.list[moduleId];

		if (!!moduleData && !!moduleTestData)
			it(`Testing: ${moduleId}`, () => {
				expect(moduleData).not.toBeNull();
				expect(moduleTestData).not.toBeNull();
				
				Object.keys(moduleTestData.lambdasChecks).forEach(lambdaId => {
					const lambdaTestData = moduleTestData.lambdasChecks[lambdaId];
					const lambda = moduleData.lambdas[lambdaId];

					expect(lambdaTestData).not.toBeNull();
					expect(lambda).not.toBeNull();


					
					if (!!lambda && !!lambdaTestData) {
						const result = LambdaLoader(lambda.lambda.toString())({
							moduleId,
							lambdaId,
							...lambdaTestData.input
						}, lambdaTestData.slots);
						expect(result).toEqual(lambdaTestData.output);
					}
				});
			})
	});
})