import { chromium, expect, test } from "@playwright/test";
//launching browser
//we have inbuilt test runner in playwright - playwright test runner
//playwright supports async an dawait to handle promises
//.launch - will provide  browser instance
//newContext - will give a new browser context( will not cache things from one one contect to another)
//newPage - new tab
//testMatch - is an array.Has all the files which we need to execute(run)
//npm - to download ll dependencies on package.json file
//npx - to execute
//by default playwright executes in headless mode(we can't see browser, just we see fial pass/fail), to do this just use headless:false in launch function.
//new page will open a new tab without any catche, page will do operation on that particular page only
//codgen - to generate code script/ record a test
//page concept (in recorder.ts file in test fxn curley bracket) is known as fixture
//config file - it is the main thing here in playwright, it is the configuration accross all files
//playwright test recorder - example o gthis is recorder.ts file, here it does not lists down all the actions but much better that rest of the tools.
//locators mentioned on recorder.ts file are not css nor xpath they are playwright special locators

test("Login test demo", async () => {
  const browser = await chromium.launch({
    //headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://preview.dev.prolaio.com/login");
  await page.fill("//input[@id='email']", "avni@gluelabs.com");
  await page.fill("//input[@id='password']", "avni2023");
  await page.click("//button");
  await expect(page.locator("//p")).toHaveText("avni@gluelabs.com");

  //await page.waitForTimeout(3000);
  await page.pause();
});
