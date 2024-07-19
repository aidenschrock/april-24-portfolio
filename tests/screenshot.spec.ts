import { test } from "@playwright/test";

test("should export a screenshot of every page", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.getByTestId("spongebob").click();
  await page.screenshot({
    path: `screenshots/desktop/spongebob-${test.info().project.name}.png`,
    fullPage: true,
  });
  await page.getByTestId("next-project").click();
  await page.screenshot({
    path: `screenshots/desktop/spilltracker-${test.info().project.name}.png`,
    fullPage: true,
  });
  await page.getByTestId("next-project").click();
  await page.screenshot({
    path: `screenshots/desktop/recolude-${test.info().project.name}.png`,
    fullPage: true,
  });
});
