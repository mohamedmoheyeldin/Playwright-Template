// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  reporter: 'html',
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    trace: 'on',
    video: 'on',
    screenshot: 'on',

  },

  /* Configure projects for major browsers */
  projects: [
   /* {
      name: 'Mobile iPhone 14 Pro Max safari',
      use: { ...devices['iPhone 14 Pro Max'] },
    },

    {
      name: 'Mobile iPhone 14 Pro safari',
      use: { ...devices['iPhone 14 Pro'] },
    },

    {
      name: 'Mobile Android Chrome',
      use: { ...devices['Pixel 7'] },
    },

    {
      name: 'Desktop Firefox ',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'Desktop Safari',
      use: { ...devices['Desktop Safari'] },
    },*/

    {
      name: 'Desktop Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

