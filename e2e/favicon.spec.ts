import { expect, test } from '@playwright/test';

declare global {
  interface Window {
    iconMutations: string[];
  }
}

test('serves /favicon.ico', async ({ request }) => {
  const response = await request.get('/favicon.ico');

  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toBe('image/x-icon');
});

test('renders static icon links in the initial head', async ({ request }) => {
  const html = await (await request.get('/')).text();
  const head = html.slice(0, html.indexOf('</head>'));

  expect(head).toContain(
    '<link rel="icon" href="/favicon.ico" sizes="48x48"/>'
  );
  expect(head).toContain(
    '<link rel="icon" href="/icon.svg" type="image/svg+xml"/>'
  );
});

test('keeps icon links in place across client navigations', async ({
  page,
}) => {
  await page.addInitScript(() => {
    window.iconMutations = [];
    new MutationObserver((records) => {
      for (const record of records) {
        const nodes = [
          ...Array.from(record.addedNodes),
          ...Array.from(record.removedNodes),
        ];
        for (const node of nodes) {
          if (node instanceof HTMLLinkElement && node.rel.includes('icon')) {
            window.iconMutations.push(node.getAttribute('href') ?? '');
          }
        }
      }
    }).observe(document, { childList: true, subtree: true });
  });

  await page.goto('/');
  await page.waitForLoadState('networkidle');
  const afterFirstLoad = await page.evaluate(() => window.iconMutations.length);

  for (const label of ['Writing', 'Projects', 'Yuri Mutti']) {
    await page.getByRole('link', { name: label, exact: true }).first().click();
    await page.waitForLoadState('networkidle');
  }

  const mutations = await page.evaluate(() => window.iconMutations);
  expect(mutations.slice(afterFirstLoad)).toEqual([]);
});
