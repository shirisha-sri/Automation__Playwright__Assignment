import { expect } from "@playwright/test";

export class MessageBoxPage {
  constructor(page) {
    this.page = page;
    this.messageBoxInput = page.getByPlaceholder("Enter task name");
    this.createButton = page.getByRole("button", { name: "Create" });
    this.actionsPanel = page.locator("#actionsPanel");
    this.messageBoxAction = page.getByText("Message Box");
    this.saveButton = page.locator('//button[contains(text(),"Save")]');
    this.successToast = page.locator(".toast-success");
  }

  async createMessageBoxTask(name) {
    await expect(this.messageBoxInput).toBeVisible();
    await this.messageBoxInput.fill(name);
    await this.createButton.click();
    await this.actionsPanel.getByText("Message Box").dblclick();
    await expect(this.messageBoxAction).toBeVisible();
    await this.saveButton.click();
    await expect(this.successToast).toContainText("successfully");
  }
}
