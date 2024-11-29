// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('http://35.228.49.194');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Todo App/);
});

test('add item', async ({ page }) => {
    await page.goto('http://35.228.49.194');

    await page.getByRole('textbox').fill('example value');
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForSelector('text=example value');
});
