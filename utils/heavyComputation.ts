export interface HeavyComputationOptions {
	iterations?: number;
	arraySize?: number;
	innerLoops?: number;
}

export function heavyComputation({
	iterations = 100,
	arraySize = 10000,
	innerLoops = 200,
}: HeavyComputationOptions = {}) {
	const result: number[] = [];

	for (let i = 0; i < iterations; i++) {
		const arr = new Array(arraySize);

		for (let j = 0; j < arraySize; j++) {
			let value = j;

			for (let k = 0; k < innerLoops; k++) {
				value = Math.sqrt(value * Math.random() + k);
			}

			arr[j] = value;
		}

		arr.sort((a, b) => a - b);

		result.push(arr[Math.floor(arr.length / 2)]);
	}

	return result;
}
