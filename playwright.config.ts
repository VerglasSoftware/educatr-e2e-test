import { defineConfig, devices } from "@playwright/test";
import process from "node:process";
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    testDir: "./tests",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 3 : 3,
    workers: process.env.CI ? 1 : undefined,
    reporter: [["html", { open: "never" }]],
    timeout: 25_000,
    expect: {timeout: 25_000},
    use: {
        actionTimeout: 10_000,
        headless: true,
        baseURL: "https://educatr.uk/",
        trace: "on-first-retry",
    },

    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },

        {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] },
        },

        {
            name: "webkit",
            use: { ...devices["Desktop Safari"] },
        },
    ],
});
