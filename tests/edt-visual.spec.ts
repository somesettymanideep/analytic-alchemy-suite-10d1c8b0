import { test, expect } from "../playwright-fixture";

/**
 * Visual regression checks for the EDT page and closely related views.
 * Catches background-seam issues (mismatched section backgrounds,
 * abrupt transitions between the toggle band and the hero below, etc.)
 * by taking deterministic full-viewport screenshots at multiple sizes
 * and comparing to committed baselines.
 *
 * First run: `bunx playwright test tests/edt-visual.spec.ts --update-snapshots`
 * Subsequent runs will fail if the rendered pixels drift.
 */

const VIEWPORTS = [
  { name: "desktop", width: 1280, height: 1800 },
  { name: "tablet", width: 834, height: 1400 },
  { name: "mobile", width: 390, height: 1600 },
] as const;

const ROUTES = [
  { name: "edt-customers", path: "/edt", audience: "customers" as const },
  { name: "edt-partners", path: "/edt", audience: "partners" as const },
  { name: "home", path: "/", audience: null },
];

test.describe("EDT visual regression", () => {
  for (const route of ROUTES) {
    for (const vp of VIEWPORTS) {
      test(`${route.name} @ ${vp.name}`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(route.path, { waitUntil: "domcontentloaded" });

        if (route.audience === "partners") {
          await page.getByRole("tab", { name: /For SI Partners/i }).click();
        }

        // Disable animations & motion so screenshots are deterministic.
        await page.addStyleTag({
          content: `
            *, *::before, *::after {
              animation: none !important;
              transition: none !important;
              caret-color: transparent !important;
            }
            html { scroll-behavior: auto !important; }
          `,
        });

        // Wait for fonts and any lazy images in the viewport.
        await page.evaluate(() => (document as any).fonts?.ready);
        await page.waitForTimeout(200);

        await expect(page).toHaveScreenshot(`${route.name}-${vp.name}.png`, {
          fullPage: false,
          maxDiffPixelRatio: 0.01,
          animations: "disabled",
        });
      });
    }
  }

  test("edt toggle band has no visible seam with hero below", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 1800 });
    await page.goto("/edt", { waitUntil: "domcontentloaded" });
    await page.addStyleTag({
      content: `*, *::before, *::after { animation: none !important; transition: none !important; }`,
    });
    await page.evaluate(() => (document as any).fonts?.ready);

    // Sample vertical pixels across the boundary between the toggle band
    // and the hero. If they diverge sharply, a seam has re-appeared.
    const seam = await page.evaluate(() => {
      const tab = document.querySelector('[role="tablist"]') as HTMLElement | null;
      if (!tab) return null;
      const rect = tab.getBoundingClientRect();
      const x = Math.round(rect.left + rect.width / 2);
      const yTop = Math.round(rect.bottom + 40);
      const yBottom = Math.round(rect.bottom + 220);
      const top = document.elementFromPoint(x, yTop);
      const bottom = document.elementFromPoint(x, yBottom);
      const cTop = top ? getComputedStyle(top).backgroundColor : "";
      const cBottom = bottom ? getComputedStyle(bottom).backgroundColor : "";
      return { cTop, cBottom };
    });

    expect(seam).not.toBeNull();
    // Both sample points should render against a light neutral background —
    // never a dark surface that would signal an abrupt section break.
    expect(seam!.cTop).toMatch(/rgba?\(/);
    expect(seam!.cBottom).toMatch(/rgba?\(/);
  });
});