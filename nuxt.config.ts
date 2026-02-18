// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@sentry/nuxt/module"],
	devtools: { enabled: true },
	css: ["@picocss/pico"],

	routeRules: {
		"/table/csr": { ssr: false },
		"/table/ssr": { ssr: true },
		"/table/ssg": { prerender: true },
		"/table/isr": { isr: 10 },

		"/lcp/csr": { ssr: false },
		"/lcp/ssr": { ssr: true },
		"/lcp/ssg": { prerender: true },
		"/lcp/isr": { isr: 10 },

		"/tti/csr": { ssr: false },
		"/tti/ssr": { ssr: true },
		"/tti/ssg": { prerender: true },
		"/tti/isr": { isr: 10 },
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
