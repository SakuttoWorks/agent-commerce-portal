import { test, expect } from '@playwright/test';
import * as yaml from 'yaml';

// 本番URLを直接指定
const PROD_URL = 'https://sakutto.works';

test.describe('本番環境ファイル配信テスト (Production)', () => {
    test('mcp.jsonが取得でき、JSONとして解釈できること', async ({ request }) => {
        const response = await request.get(`${PROD_URL}/mcp.json`);
        expect(response.ok()).toBeTruthy();
        expect(response.headers()['content-type']).toContain('application/json');
        const data = await response.json();
        expect(data).toHaveProperty('mcpVersion');
    });

    test('openapi.yamlが取得でき、YAMLとして解釈できること', async ({ request }) => {
        const response = await request.get(`${PROD_URL}/openapi.yaml`);
        expect(response.ok()).toBeTruthy();
        const rawData = await response.text();
        expect(() => yaml.parse(rawData)).not.toThrow();
    });

    test('llms.txtが取得できること', async ({ request }) => {
        const response = await request.get(`${PROD_URL}/llms.txt`);
        expect(response.ok()).toBeTruthy();
        const text = await response.text();
        expect(text).toContain('Agent-Commerce-OS');
    });
});

test.describe('本番環境UI結合テスト (Production)', () => {
    test('実際のGateway APIと通信し、ステータスが判定されること', async ({ page }) => {
        // モックは使用せず、実際のページを開いてAPIの応答を待つ
        await page.goto(PROD_URL);

        const badge = page.locator('#system-status');
        // Checking状態から Operational または Degraded に変化するのを待機 (最大10秒)
        await expect(badge).not.toHaveText(/Checking Gateway Status/, { timeout: 10000 });

        // バッジにテキストがセットされたことを確認
        const text = await badge.innerText();
        expect(['Gateway Operational', 'Gateway Unavailable'].some(t => text.includes(t))).toBeTruthy();
    });
});