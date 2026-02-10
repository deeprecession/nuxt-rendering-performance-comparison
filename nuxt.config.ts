// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@sentry/nuxt/module"],
	devtools: { enabled: true },
	css: ["@picocss/pico"],

	routeRules: {
		"/csr": { ssr: false },
		"/ssr": { ssr: true },
		"/ssg": { prerender: true },
		"/isr": { isr: 10 },
	},

	sourcemap: {
		client: "hidden",
	},

	compatibilityDate: "2025-07-15",

	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},

	sentry: {
		org: "vladislav-kishkovskiy",
		project: "nuxt-rendering-performance-comparison",
		autoInjectServerSentry: "top-level-import",
	},
});
