import { test, expect } from "@playwright/test";
//here we only enter to patient details page by clicking on any patient

test("test", async ({ page }) => {
  await page.goto("https://preview.dev.prolaio.com/login");
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("avni@gluelabs.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("avni2023");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForTimeout(2000);
  await page.goto("https://preview.dev.prolaio.com/patientList");
  await page
    .getByRole("link", { name: "63ee09afe11c8347ec7e3f44 63/M info-circle" })
    .click();
  await page.pause();
});
