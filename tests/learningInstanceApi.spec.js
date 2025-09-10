import { test, expect } from "@playwright/test";
import { ApiHelper } from "../utils/apiHelper.js";
import { CREDENTIALS } from "../utils/constants";

test("Create and Validate Learning Instance API", async () => {
  const apiHelper = new ApiHelper("https://example.com");
  const { token, context } = await apiHelper.login(CREDENTIALS.username, CREDENTIALS.password);

  const payload = { name: "Automation Instance", type: "AI" };
  const responseBody = await apiHelper.createLearningInstance(context, token, payload);

  expect(responseBody).toHaveProperty("id");
  expect(responseBody.name).toBe(payload.name);
  expect(responseBody.status).toBe("Created");
});
