import { expect } from "@playwright/test";

export class AutomationPage {
  constructor(page) {
    this.page = page;
    this.leftMenu = page.getByRole("navigation", { name: "Main Menu" });
    this.automationMenu = this.leftMenu.getByRole("link", { name: "Automation" });
    this.createDropdown = page.locator("#create-dropdown");
    this.taskBotOption = page.getByRole("menuitem", { name: "Task Bot" });
    this.formOption = page.locator("button.option-form");
    this.searchInput = page.getByPlaceholder("Search tasks");
    this.profileImage = page.getByAltText("User Profile");
    this.saveButton = page.locator('//button[contains(text(),"Save")]');
  }

  async openAutomationMenu() {
    // Explicit left button click 
    await this.automationMenu.click({ button: "left" });
    await expect(this.page).toHaveURL(/.*automation/);
  }

  async selectTaskBot() {
    await this.createDropdown.click();
    await this.taskBotOption.click();
  }

  async selectForm() {
    await this.createDropdown.click();
    await this.formOption.click();
  }
}
