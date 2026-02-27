<template>
	<nav>
		<ul>
			<li>
				<NuxtLink
					:class="{ 'nav-link--active': isCategoryActive('lcp') }"
					:to="{ name: 'lcp' }"
				>Largest Contentful Paint (LCP)</NuxtLink>
			</li>
			<li>
				<NuxtLink
					:class="{ 'nav-link--active': isCategoryActive('tbt') }"
					:to="{ name: 'tbt' }"
				>Total Blocking Time (TBT)</NuxtLink>
			</li>
			<li>
				<NuxtLink
					:class="{ 'nav-link--active': isCategoryActive('si') }"
					:to="{ name: 'si' }"
				>Speed Index (SI)</NuxtLink>
			</li>
		</ul>
		<ul v-if="selectedCategory">
			<li
				v-for="mode in renderingModes"
				:key="mode"
			>
				<NuxtLink
					:class="{ 'nav-link--active': isModeActive(mode) }"
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
	if (name.startsWith("tbt")) return "tbt";
	if (name.startsWith("si")) return "si";
	return null;
});

const isCategoryActive = (category: string) => {
	return routeName.value.startsWith(category);
};

const isModeActive = (mode: string) => {
	return routeName.value.endsWith(`-${mode}`);
};
</script>

<style lang="css" scoped>
.nav-link--active {
	text-decoration: underline;
}
</style>
