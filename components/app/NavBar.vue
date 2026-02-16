<template>
	<nav>
		<ul>
			<li>
				<NuxtLink :to="{ name: 'lcp' }">Largest Contentful Pain (LCP)</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="{ name: 'table' }">Table</NuxtLink>
			</li>
		</ul>
		<ul v-if="selectedCategory">
			<li
				v-for="mode in renderingModes"
				:key="mode"
			>
				<NuxtLink
					:to="{ name: `${selectedCategory}-${mode}` }"
				>
					{{ mode.toUpperCase() }}
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const renderingModes = ["ssr", "csr", "ssg", "isr"];

const routeName = computed(() => {
	return typeof route.name === "string" ? route.name : "";
});

const selectedCategory = computed(() => {
	const name = routeName.value;
	if (name.startsWith("lcp")) return "lcp";
	if (name.startsWith("table")) return "table";
	return null;
});
</script>
