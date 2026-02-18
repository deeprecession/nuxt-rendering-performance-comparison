<template>
	<div>
		<h1>Delayed content</h1>
		<p

			v-if="shouldHydrate"
			:key="hydrateKey"
		>
			this content is delayed for {{ delayMs }}ms
		</p>
		<div
			v-else
			aria-busy="true"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = withDefaults(defineProps<{
	delayMs?: number;
}>(), { delayMs: 3000 });

const shouldHydrate = ref(false);
const hydrateKey = ref(0);

onMounted(() => {
	setTimeout(() => {
		shouldHydrate.value = true;
		hydrateKey.value = Date.now();
	}, props.delayMs);
});
</script>
