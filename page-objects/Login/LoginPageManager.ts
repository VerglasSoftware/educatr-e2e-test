import { type Page } from "@playwright/test";

import { LoginPage } from "./LoginPage";

export class LoginPageManager {
    private readonly loginPage: LoginPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
    }

    onLoginPage(): LoginPage {
        return this.loginPage;
    }
}
