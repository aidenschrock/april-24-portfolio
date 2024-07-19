import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Chrome-1024",
      testMatch: /.*screenshot.spec.ts/,
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1024, height: 768 },
      },
    },
    {
      name: "Chrome-1280-3",
      testMatch: /.*screenshot.spec.ts/,
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: "Chrome-1280-2",
      testMatch: /.*screenshot.spec.ts/,
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 768 },
      },
    },
    {
      name: "Chrome-1280",
      testMatch: /.*screenshot.spec.ts/,
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 800 },
      },
    },
    {
      name: "Chrome-1360",
      testMatch: /.*screenshot.spec.ts/,
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1360, height: 768 },
      },
    },
    {
      name: "Chrome-1366",
      testMatch: /.*screenshot.spec.ts/,
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1366, height: 768 },
      },
    },
    {
      name: "Chrome-1536",
      testMatch: /.*screenshot.spec.ts/,
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1536, height: 864 },
      },
    },
    {
      name: "Chrome-1600",
      testMatch: /.*screenshot.spec.ts/,
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1600, height: 900 },
      },
    },
    {
      name: "Chrome-1920",
      testMatch: /.*screenshot.spec.ts/,
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1920, height: 1080 },
      },
    },

    {
      name: "firefox",
      testMatch: /.*screenshot.spec.ts/,
      use: {
        ...devices["Desktop Firefox"],
        viewport: { width: 1920, height: 1080 },
      },
    },

    {
      name: "webkit",
      testMatch: /.*screenshot.spec.ts/,
      use: {
        ...devices["Desktop Safari"],
        viewport: { width: 1920, height: 1080 },
      },
    },

    {
      name: "Pixel 5",
      testMatch: /.*screenshot.spec.ts/,
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "Pixel 7",
      testMatch: /.*screenshot.spec.ts/,
      use: { ...devices["Pixel 7"] },
    },
    {
      name: "iPhone 12",
      testMatch: /.*screenshot.spec.ts/,
      use: { ...devices["iPhone 12"] },
    },
    {
      name: "iPhone 13",
      testMatch: /.*screenshot.spec.ts/,
      use: { ...devices["iPhone 13"] },
    },
    {
      name: "iPhone 14",
      testMatch: /.*screenshot.spec.ts/,
      use: { ...devices["iPhone 14"] },
    },
    {
      name: "iPhone 14 Pro",
      testMatch: /.*screenshot.spec.ts/,
      use: { ...devices["iPhone 14 Pro"] },
    },
    {
      name: "Galaxy S8",
      testMatch: /.*screenshot.spec.ts/,
      use: { ...devices["Galaxy S8"] },
    },
    {
      name: "Galaxy S9+",
      testMatch: /.*screenshot.spec.ts/,
      use: { ...devices["Galaxy S9+"] },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
