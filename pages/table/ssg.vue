<template>
	<div>
		<h1>Static Site Generation (SSG)</h1>
		<Table />
	</div>
</template>

<script lang="ts" setup>
import Table from "~/components/app/Table.vue";

definePageMeta({
	name: "table-ssg",
});
</script>
