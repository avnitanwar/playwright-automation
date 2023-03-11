import { test, chromium, expect } from "@playwright/test";

import { loginUrl, email, password, patientIdtoSearch } from "./TestData.test";

test("Playwright POC test demo", async () => {
  const browser = await chromium.launch({});
  const context = await browser.newContext();
  const page = await context.newPage();
  //test.slow();

  console.log("Launching Browser");
  await page.goto(loginUrl);
  //await page.waitForTimeout(7000);
  console.log("Navigating to login page - " + loginUrl);

  console.log("Adding Email and Password");
  await page.fill("//input[@id='email']", email);
  console.log("Enter Email - Successful");
  await page.fill("//input[@id='password']", password);
  console.log("Enter Password - Successful");
  await page.click("//button");
  //await page.waitForTimeout(7000);
  console.log("Click login button - Successful");

  console.log("Checking if correct user is logged in..");
  //await page.waitForTimeout(7000);
  await page.getByText(email).isVisible();
  console.log("Verifying email for logged in user - " + email);
  console.log("Correct user logged in");

  console.log("Search for patient id - " + patientIdtoSearch);
  await page.getByPlaceholder("Keyword search").fill(patientIdtoSearch);
  await page.keyboard.press("Enter");

  console.log("Found patient with id - " + patientIdtoSearch);
  await page.getByRole("link", { name: patientIdtoSearch }).click();
  console.log("Navigating to patient details page");

  console.log("Verifying presence of all widgets on the page");

  console.log("Verifying MONITORING DATA widget");
  await expect(page.getByText("Monitoring data")).toBeVisible();
  console.log("Monitoring Data Widget exists for this patient");

  console.log("Verifying MONITORING DETAIL widget");
  await expect(page.getByText("Monitoring detail")).toBeVisible();
  console.log("Monitoring Detail Widget exists for this patient");

  console.log("Verifying DIAGNOSTIC TESTING widget");
  await expect(page.getByText("Diagnostic testing")).toBeVisible();
  console.log("Diagnostic Testing Widget exists for this patient");

  console.log("Verifying MEDICATIONS widget");
  await expect(
    page.getByText("MedicationsMedicationStart dateEnd date")
  ).toBeVisible();
  console.log("Medications Widget exists for this patient");

  console.log("Verifying PROBLEMS LIST widget");
  await expect(page.getByText("Problems list")).toBeVisible();
  console.log("Problems List Widget exists for this patient");

  console.log("Test End");
  await page.pause();
});
