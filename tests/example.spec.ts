import { test, expect } from '@playwright/test';

//Tests de pruebas para practicar en playwright

test('toggle dark mode', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // Buscar y hacer clic en el botón de cambiar tema
  const themeButton = page.getByLabel(/Switch between dark and light mode/i);
  await themeButton.click();
  
  // Verificar que el atributo html cambie a 'dark' o 'light'
  await expect(page.locator('html')).toHaveAttribute('data-theme', /dark|light/);
});
