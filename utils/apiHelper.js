import { expect, request } from "@playwright/test";

export class ApiHelper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async login(username, password) {
    const context = await request.newContext({ baseURL: this.baseURL });
    const response = await context.post("/api/login", { data: { username, password } });
    expect(response.status()).toBe(200);
    const body = await response.json();
    return { token: body.token, context };
  }

  async createLearningInstance(context, token, payload) {
    const response = await context.post("/api/learning-instance", {
      headers: { Authorization: `Bearer ${token}` },
      data: payload,
    });
    expect(response.status()).toBe(201);
    return response.json();
  }
}
