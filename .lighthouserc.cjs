module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000"],

      numberOfRuns: 5,

      settings: {
        formFactor: "mobile",

        throttlingMethod: "provided",

        onlyAudits: ["total-blocking-time"],
      },

      chromePath: "/usr/bin/brave",

      chromeFlags: "--headless=new --no-sandbox",
    },

    upload: {
      target: "filesystem",
      outputDir: "./reports",
    },
  },
};
