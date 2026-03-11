<template>
	<div>
		<p>This page blocks during hydration.</p>

		<p v-if="!messageClient ">
			rendering content
		</p>
		<p v-else>
			{{ messageClient }}
		</p>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(defineProps<{ blockingTimeMs?: number }>(), { blockingTimeMs: 3000 });

const messageClient = ref("");

const start = performance.now();
while (performance.now() - start < props.blockingTimeMs) {
	Math.sqrt(Math.random() * 1000);
}

messageClient.value = "content is rendered on the client";
</script>
