<template>
	<div class="gallery">
		<h1>Pandas</h1>
		<div class="gallery__small-images">
			<img
				src="/public/panda-2.avif"
				alt="image"
				fetchpriority="low"
			>
			<img
				src="/public/panda-3.webp"
				alt="image"
				fetchpriority="low"
			>
			<img
				src="/public/panda-4.jpg"
				alt="image"
				fetchpriority="low"
			>
		</div>
		<div
			class="gallery__main-image"
		>
			<img
				src="/public/panda-1.jpg"
				alt="main image"
				fetchpriority="high"
			>
		</div>
	</div>
</template>

<style scoped lang="css">
.gallery {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
}

.gallery__main-image {
  width: 100%;
  height: fit-content;
  overflow: hidden;
  border-radius: 8px;
}

.gallery__main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery__small-images {
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5rem;
  width: 100%;
}

.gallery__small-images img {
  width: calc(33.333% - 0.33rem);
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
}
</style>
