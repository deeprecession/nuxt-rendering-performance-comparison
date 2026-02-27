// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@sentry/nuxt/module"],
	devtools: { enabled: true },
	css: ["@picocss/pico"],

	routeRules: {
		"/lcp/csr": { ssr: false },
		"/lcp/ssr": { ssr: true },
		"/lcp/ssg": { prerender: true },
		"/lcp/isr": { isr: 10 },

		"/tbt/csr": { ssr: false },
		"/tbt/ssr": { ssr: true },
		"/tbt/ssg": { prerender: true },
		"/tbt/isr": { isr: 10 },

		"/si/csr": { ssr: false },
		"/si/ssr": { ssr: true },
		"/si/ssg": { prerender: true },
		"/si/isr": { isr: 10 },
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
