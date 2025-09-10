import { expect } from "@playwright/test";

export class FormPage {
  constructor(page) {
    this.page = page;
    this.formNameInput = page.getByPlaceholder("Enter form name");
    this.createButton = page.getByRole("button", { name: "Create" });
    this.textBoxElement = page.getByText("Textbox");
    this.fileUploadElement = page.getByText("Select File");
    this.canvas = page.locator("#canvas");
    this.saveButton = page.locator('//button[contains(text(),"Save")]');
    this.successToast = page.locator(".toast-success");
  }

  async createForm(text, filePath) {
    await expect(this.formNameInput).toBeVisible();
    await this.formNameInput.fill("Sample Form");
    await this.createButton.click();
    await this.textBoxElement.dragTo(this.canvas);
    await this.fileUploadElement.dragTo(this.canvas);
    const textbox = this.canvas.locator('input[type="text"]');
    await textbox.fill(text);
    const fileInput = this.canvas.locator('input[type="file"]');
    await fileInput.setInputFiles(filePath);
    await this.saveButton.click();
    await expect(this.successToast).toContainText("successfully");
  }
}
