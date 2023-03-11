import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testMatch: ["tests/demo.test.ts"],
  use: {
    headless: true,
  },
});
