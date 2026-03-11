<template>
	<div>
		<p>This page blocks during hydration.</p>

		<p v-if="!messageServer">
			rendering content
		</p>
		<p v-else>
			{{ messageServer }}
		</p>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = withDefaults(defineProps<{ blockingTimeMs?: number }>(), { blockingTimeMs: 3000 });

const messageServer = ref("");

onMounted(() => {
	const start = performance.now();

	while (performance.now() - start < props.blockingTimeMs) {
		Math.sqrt(Math.random() * 1000);
	}

	messageServer.value = "content rendered after hydration";
});
</script>
