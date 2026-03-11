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
import { heavyComputation, type HeavyComputationOptions } from "~/utils/heavyComputation";

const props = defineProps<{ computation?: HeavyComputationOptions }>();

const messageClient = ref("");

heavyComputation(props.computation);
messageClient.value = "content is rendered on the client";
</script>
