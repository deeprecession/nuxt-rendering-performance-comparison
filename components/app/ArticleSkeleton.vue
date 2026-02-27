<template>
	<div class="skeleton-article">
		<div class="skeleton-header">
			<div class="skeleton-title" />
			<div class="skeleton-meta">
				<div class="skeleton-meta-line" />
				<div class="skeleton-meta-line" />
			</div>
		</div>

		<div class="skeleton-image" />

		<div class="skeleton-content">
			<div class="skeleton-paragraph">
				<div class="skeleton-line" />
				<div class="skeleton-line" />
				<div class="skeleton-line short" />
			</div>

			<div class="skeleton-paragraph">
				<div class="skeleton-line" />
				<div class="skeleton-line" />
				<div class="skeleton-line" />
				<div class="skeleton-line short" />
			</div>

			<div class="skeleton-fact-box">
				<div class="skeleton-fact-title" />
				<div class="skeleton-fact-item" />
				<div class="skeleton-fact-item" />
				<div class="skeleton-fact-item" />
				<div class="skeleton-fact-item" />
			</div>

			<div class="skeleton-paragraph">
				<div class="skeleton-line" />
				<div class="skeleton-line" />
				<div class="skeleton-line" />
			</div>

			<div class="skeleton-quote" />

			<div class="skeleton-gallery">
				<div class="skeleton-gallery-item" />
				<div class="skeleton-gallery-item" />
				<div class="skeleton-gallery-item" />
			</div>

			<div class="skeleton-facts-grid">
				<div class="skeleton-fact-card" />
				<div class="skeleton-fact-card" />
				<div class="skeleton-fact-card" />
				<div class="skeleton-fact-card" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.skeleton-article {
  margin: 0 auto;
  padding: 20px;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.3; }
}

.skeleton-header {
  margin-bottom: 30px;
}

.skeleton-title {
  height: 48px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 15px;
  width: 80%;
}

.skeleton-meta {
  display: flex;
  gap: 20px;
}

.skeleton-meta-line {
  height: 16px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
  width: 120px;
}

.skeleton-image {
  height: 400px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
  margin-bottom: 40px;
}

.skeleton-content {
  margin-top: 30px;
}

.skeleton-paragraph {
  margin-bottom: 30px;
}

.skeleton-line {
  height: 16px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
}

.skeleton-line.short {
  width: 60%;
}

.skeleton-fact-box {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin: 30px 0;
}

.skeleton-fact-title {
  height: 24px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
  width: 150px;
  margin-bottom: 20px;
}

.skeleton-fact-item {
  height: 16px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 90%;
}

.skeleton-quote {
  height: 80px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
  margin: 30px 0;
  border-left: 4px solid #e0e0e0;
}

.skeleton-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin: 30px 0;
}

.skeleton-gallery-item {
  height: 150px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

.skeleton-facts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin: 30px 0;
}

.skeleton-fact-card {
  height: 80px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>
