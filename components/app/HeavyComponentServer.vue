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
import { heavyComputation, type HeavyComputationOptions } from "~/utils/heavyComputation";

const props = defineProps<{ computation?: HeavyComputationOptions }>();

const messageServer = ref("");

onMounted(() => {
	heavyComputation(props.computation);
	messageServer.value = "content rendered after hydration";
});
</script>
