import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 60000,
  retries: 1,
  reporter: [
    ["html", { outputFolder: "reports/html-report" }],
    ["json", { outputFile: "reports/test-results.json" }]
  ],
  use: {
    baseURL: "https://example.com",
    headless: false,
    browserName: "chromium", // only Chrome/Chromium
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "Google Chrome",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
