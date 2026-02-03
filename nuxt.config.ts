// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/eslint"],
	devtools: { enabled: true },
	css: ["@picocss/pico"],
	routeRules: {
		"/table/csr": { ssr: false },
		"/table/ssr": { ssr: true },
		"/table/ssg": { prerender: true },
		"/table/isr": { isr: 10 },
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
});
