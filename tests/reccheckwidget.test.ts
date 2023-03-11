import { test, expect } from "@playwright/test";

import { loginUrl, email, password } from "./TestData.test";

test("test", async ({ page }) => {
  //var loginUrl:string = "https://preview.dev.prolaio.com//login";
  console.log("Navigating to login page - " + loginUrl);
  await page.goto(loginUrl);
  console.log("On Login Page");
  await page.waitForTimeout(3000);
  //console.log("Trying to login, entering email - "+ email)
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill(email);
  console.log("Enter Email - Successful");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill(password);
  console.log("Enter Password - Successful");
  await page.getByRole("button", { name: "Login" }).click();
  console.log("Login - Successful");
  await page
    .getByRole("link", { name: "63ee09afe11c8347ec7e3f44 63/M info-circle" })
    .click();
  console.log("Patient Clicked with id - 63ee09afe11c8347ec7e3f44 ");
  await page.locator("div:nth-child(2) > div > div > .primary").first().click();
  console.log("Monitoring Data Widget Click - Successful");
  await page.locator("div:nth-child(2) > .primary").click();
  console.log("Monitoring Detail Widget click - Successful");
  await page
    .getByText(
      "Diagnostic testingPreviousCurrentDateCurrent valueLVEF (%)5570≤30≥80eGFR (ml/min"
    )
    .click();
  console.log("Diagnostic Testing Widget click - Successful");
  await page
    .getByText(
      "MedicationsMedicationStart dateEnd datespirolactone25mg daily01/01/19-lisinopril"
    )
    .click();
  console.log("Medications Widget click - Successful");
  await page
    .getByText(
      "Problems listDiagnosis Date atrial fibrillation01/01/16stent01/01/16heart failur"
    )
    .click();
  console.log("Problems List Widget click - Successful");
  await page
    .locator("div")
    .filter({ hasText: "Data collection statusECGHRActivityKCCQ-12BPWeight" })
    .nth(1)
    .click();
  console.log("Data Collection Status Widget click - Successful");
  await page.locator("div:nth-child(3) > .secondary").click();
  console.log("Comments Section Widget click - Successful");
  await page.locator(".secondary").first().click();
  console.log("Action Selection Widget click - Successful");
  await page.pause();
  console.log("This patient has all the widgets in its patient detail page");
});
