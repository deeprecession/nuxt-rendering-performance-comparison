<template>
	<div>
		<div
			v-for="n in 10"
			:key="n"
			class="heavy-item"
		>
			<span>{{ complexComputation(n) }}</span>
			<div
				v-for="m in 100"
				:key="m"
				class="nested"
			>
				Nested item {{ m }}: {{ nestedComputation(n, m) }}
			</div>
		</div>
	</div>
</template>

<script setup>
const complexComputation = (n) => {
	let result = 0;
	for (let i = 0; i < 1000; i++) {
		result += Math.sqrt(n * i) * Math.sin(i) * Math.cos(n);
	}
	return result;
};

const nestedComputation = (n, m) => {
	let result = 0;
	for (let i = 0; i < 500; i++) {
		result += Math.pow(n, m) * Math.log(i + 1);
	}
	return result;
};
</script>
