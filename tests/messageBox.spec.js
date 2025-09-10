import { test } from "@playwright/test";
import { LoginPage, AutomationPage, MessageBoxPage } from "../pages";
import { CREDENTIALS } from "../utils/constants";

test("Create Message Box Task", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const automationPage = new AutomationPage(page);
  const messageBoxPage = new MessageBoxPage(page);

  await loginPage.goto();
  await loginPage.login(CREDENTIALS.username, CREDENTIALS.password);

  await automationPage.openAutomationMenu();
  await automationPage.selectTaskBot();
  await messageBoxPage.createMessageBoxTask("My First Message Box");
});
