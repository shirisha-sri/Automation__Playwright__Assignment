import { test } from "@playwright/test";
import { LoginPage, AutomationPage, FormPage } from "../pages";
import { CREDENTIALS, FILES } from "../utils/constants";

test("Create Form with File Upload", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const automationPage = new AutomationPage(page);
  const formPage = new FormPage(page);

  await loginPage.goto();
  await loginPage.login(CREDENTIALS.username, CREDENTIALS.password);

  await automationPage.openAutomationMenu();
  await automationPage.selectForm();
  await formPage.createForm("Automation Test Text", FILES.uploadFile);
});
