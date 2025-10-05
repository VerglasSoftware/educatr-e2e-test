import { test, expect } from "@playwright/test";
import { LoginPageManager } from "../page-objects/Login/LoginPageManager";

let loginPageManager: LoginPageManager;

require("dotenv").config();

test.beforeEach(async ({ page }) => {
    loginPageManager = new LoginPageManager(page);

    await loginPageManager.onLoginPage().enterUsername('${process.env.USERNAME}');
    await loginPageManager.onLoginPage().enterPassword('${process.env.PASSWORD}');
    await loginPageManager.onLoginPage().clickSignIn();
});
