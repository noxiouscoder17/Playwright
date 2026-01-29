/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 60* 1000,
  expect: {
    timeout: 120 *1000,
  },
  reporter: 'html',
  use: {
    browserName: 'chromium'
  },
});
module.exports = config;
