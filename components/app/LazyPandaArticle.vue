<template>
	<div class="article-container">
		<Suspense>
			<template #default>
				<AsyncPandaArticle />
			</template>

			<template #fallback>
				<ArticleSkeleton />
			</template>
		</Suspense>
	</div>
</template>

<script setup>
import ArticleSkeleton from "./ArticleSkeleton.vue";

const AsyncPandaArticle = defineAsyncComponent(() =>
	import("./PandaArticle.vue"),
);
</script>
