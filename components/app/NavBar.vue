<template>
	<nav class="container">
		<ul>
			<li><strong>Table App</strong></li>
		</ul>
		<ul>
			<li>
				<NuxtLink :to="{ name: 'table-ssr' }">SSR</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="{ name: 'table-csr' }">CSR</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="{ name: 'table-ssg' }">SSG</NuxtLink>
			</li>
		</ul>
	</nav>
</template>
