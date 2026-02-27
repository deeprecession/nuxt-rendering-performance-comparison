<template>
	<main class="container">
		<article class="panda-article">
			<header class="article-header">
				<hgroup>
					<h1 class="article-title">
						The Gentle Giants: Understanding Giant Pandas
					</h1>
					<p class="article-meta">
						By Wildlife Conservation Society • February 27, 2026 • 5 min read
					</p>
				</hgroup>
			</header>

			<div class="featured-image">
				<img
					src="/public/panda-resting.jpg"
					alt="Giant panda eating bamboo in natural habitat"
					loading="lazy"
				>
			</div>

			<div class="article-content">
				<p class="lead">
					In the misty bamboo forests of central China, one of the world's most beloved and
					recognizable creatures continues to captivate our hearts. The giant panda (Ailuropoda
					melanoleuca) represents both the challenges and triumphs of wildlife conservation.
				</p>

				<h2>A Symbol of Conservation Success</h2>
				<p>
					Once濒危, giant pandas have made a remarkable comeback thanks to decades of dedicated
					conservation efforts. In 2021, Chinese officials announced that pandas are no longer
					endangered, though they remain vulnerable. Their numbers in the wild have increased to
					over 1,800, a testament to what focused conservation can achieve.
				</p>

				<details
					class="fact-box"
					open
				>
					<summary
						role="button"
						class="secondary outline"
					>
						Did You Know? 📋
					</summary>
					<ul>
						<li>Pandas spend 10-16 hours a day eating bamboo</li>
						<li>They consume 12-38 kg of bamboo daily</li>
						<li>Pandas have been on Earth for 2-3 million years</li>
						<li>Newborn pandas are 1/900th the size of their mother</li>
					</ul>
				</details>

				<h2>The Bamboo Specialists</h2>
				<p>
					Despite belonging to the order Carnivora, pandas have adapted to a herbivorous lifestyle.
					Their diet consists almost entirely of bamboo – 99% to be exact. This specialized diet has
					shaped their anatomy: they have developed powerful jaws and molar teeth for crushing tough
					bamboo, and an enlarged wrist bone that functions as an opposable thumb for grasping stalks.
				</p>

				<blockquote>
					"The panda's thumb is not just an anatomical curiosity; it's nature's elegant solution
					to a dietary challenge."
					<footer>
						<cite>— Dr. Sarah Chen, Wildlife Biologist</cite>
					</footer>
				</blockquote>

				<h2>Living in the Mist</h2>
				<p>
					Giant pandas inhabit temperate forests with dense bamboo understory at elevations between
					5,000 and 10,000 feet. These misty, cloud-enshrouded mountains provide the perfect
					environment for bamboo growth and offer pandas shelter from extreme temperatures.
				</p>

				<div class="grid gallery-grid">
					<div class="gallery-item">
						<img
							src="/public/panda-resting.jpg"
							alt="Panda resting on tree branch"
							loading="lazy"
						>
					</div>
					<div class="gallery-item">
						<img
							src="/public/panda-eating-bamboo.avif"
							alt="Panda eating bamboo"
							loading="lazy"
						>
					</div>
					<div class="gallery-item">
						<img
							src="/public/panda-playing.jpg"
							alt="Panda cub playing"
							loading="lazy"
						>
					</div>
				</div>

				<h2>Conservation Challenges</h2>
				<p>
					While panda populations are recovering, they still face significant threats. Habitat
					fragmentation due to human development isolates panda populations, making it difficult
					for them to find mates and maintain genetic diversity. Climate change also threatens
					to alter bamboo growth patterns, potentially leaving pandas without their primary food
					source.
				</p>

				<p>
					Conservation efforts continue through protected reserves, breeding programs, and
					community engagement. China has established over 60 panda reserves, protecting more
					than 65% of the wild population and over 50% of their habitat.
				</p>

				<div class="key-facts">
					<h3>Giant Panda Key Facts</h3>
					<div class="grid facts-grid">
						<div class="fact-item">
							<small class="fact-label">Scientific Name</small>
							<strong class="fact-value">Ailuropoda melanoleuca</strong>
						</div>
						<div class="fact-item">
							<small class="fact-label">Lifespan</small>
							<strong class="fact-value">15-20 years (wild)</strong>
						</div>
						<div class="fact-item">
							<small class="fact-label">Weight</small>
							<strong class="fact-value">70-125 kg (150-275 lbs)</strong>
						</div>
						<div class="fact-item">
							<small class="fact-label">Habitat</small>
							<strong class="fact-value">Temperate forests, China</strong>
						</div>
						<div class="fact-item">
							<small class="fact-label">Population</small>
							<strong class="fact-value">1,800+ in wild</strong>
						</div>
					</div>
				</div>
			</div>

			<footer class="article-footer">
				<p>
					<small>* This article is part of our "Wildlife Wonders" series, highlighting
						fascinating species and conservation efforts around the world.</small>
				</p>
			</footer>
		</article>
	</main>
</template>

<script setup>
await new Promise(resolve => setTimeout(resolve, 1500));
</script>

<style scoped>
.container {
	margin: 0 auto;
	padding: 1rem;
}

.panda-article {
	background: transparent;
	box-shadow: none;
	padding: 0;
}

.article-header {
	margin-bottom: 2rem;
	text-align: center;
}

.article-header hgroup {
	border-bottom: 1px solid var(--pico-muted-border-color);
	padding-bottom: 1.5rem;
}

.article-title {
	font-size: 2.5rem;
	margin-bottom: 0.5rem;
	line-height: 1.2;
}

.article-meta {
	color: var(--pico-muted-color);
	font-size: 0.9rem;
}

.featured-image {
	margin: 2rem 0;
	border-radius: var(--pico-border-radius);
	overflow: hidden;
}

.featured-image img {
	width: 100%;
	height: auto;
	display: block;
}

.lead {
	font-size: 1.25rem;
	font-weight: 400;
	color: var(--pico-color);
	line-height: 1.6;
	margin-bottom: 2rem;
	padding: 1rem 0;
	border-bottom: 1px solid var(--pico-muted-border-color);
}

.fact-box {
	margin: 2rem 0;
	background: var(--pico-card-background-color);
}

.fact-box summary {
	margin-bottom: 1rem;
}

.gallery-grid {
	margin: 2rem 0;
	--pico-grid-column-gap: 1rem;
	--pico-grid-row-gap: 1rem;
}

.gallery-item {
	border-radius: var(--pico-border-radius);
	overflow: hidden;
}

.gallery-item img {
	width: 100%;
	height: 200px;
	object-fit: cover;
	display: block;
	transition: transform 0.3s ease;
}

.gallery-item img:hover {
	transform: scale(1.05);
}

blockquote {
	margin: 2rem 0;
	padding: 1.5rem;
	background: var(--pico-card-background-color);
	border-left: 4px solid var(--pico-primary);
	font-style: italic;
}

blockquote footer {
	margin-top: 1rem;
	font-style: normal;
}

.key-facts {
	margin: 3rem 0;
	padding: 1.5rem;
	background: var(--pico-card-background-color);
	border-radius: var(--pico-border-radius);
}

.key-facts h3 {
	margin-bottom: 1.5rem;
	font-size: 1.25rem;
}

.facts-grid {
	--pico-grid-column-gap: 1.5rem;
	--pico-grid-row-gap: 1.5rem;
}

.fact-item {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	padding: 0.75rem;
	background: var(--pico-background-color);
	border-radius: var(--pico-border-radius);
}

.fact-label {
	color: var(--pico-muted-color);
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

.fact-value {
	font-size: 1.1rem;
}

.article-footer {
	margin-top: 3rem;
	padding-top: 1.5rem;
	border-top: 1px solid var(--pico-muted-border-color);
	text-align: center;
	color: var(--pico-muted-color);
}

@media (max-width: 600px) {
	.article-title {
		font-size: 2rem;
	}

	.lead {
		font-size: 1.1rem;
	}

	.gallery-item img {
		height: 150px;
	}

	.facts-grid {
		grid-template-columns: 1fr;
	}
}
</style>
