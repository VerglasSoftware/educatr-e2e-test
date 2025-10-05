import { type Page, type Locator } from "@playwright/test";

export class LoginPage {
    constructor(public readonly page: Page) {}

    // Labels
    readonly usernameLabel = "Username";
    readonly passwordLabel = "Password";
    readonly rememberMeLabel = "Remember me";
    readonly signInName = "Sign in";

    // Getters (fresh locators each time)
    private get username(): Locator {
        return this.page.getByLabel(this.usernameLabel);
    }
    private get password(): Locator {
        return this.page.getByLabel(this.passwordLabel);
    }
    private get rememberMe(): Locator {
        return this.page.getByRole("checkbox", { name: this.rememberMeLabel });
    }
    private get signIn(): Locator {
        return this.page.getByRole("button", { name: this.signInName });
    }

    async enterUsername(value: string) {
        await this.username.fill(value);
    }

    async enterPassword(value: string) {
        await this.password.fill(value);
    }

    async setRememberMe(checked = true) {
        if (checked) await this.rememberMe.check();
        else await this.rememberMe.uncheck();
    }

    async clickSignIn() {
        await this.signIn.click();
    }
}
