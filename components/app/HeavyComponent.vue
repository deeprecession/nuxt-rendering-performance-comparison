<template>
	<div>
		<p>This page blocks during hydration.</p>

		<p v-if="!message">
			rendering content
		</p>

		<p>{{ message }}</p>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = withDefaults(defineProps<{ blockingTimeMs?: number }>(), { blockingTimeMs: 3000 });

const message = ref("");

if (import.meta.client) {
	const start = performance.now();
	while (performance.now() - start < props.blockingTimeMs) {
		// block during hydration
	}

	message.value = "content is rendered";
}
else {
	onMounted(() => {
		const start = performance.now();

		while (performance.now() - start < props.blockingTimeMs) {
			// simulate heavy hydration logic
		}

		message.value = "content is rendered";
	});
}
</script>
