import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'yaml';

test.describe('静的ファイルのフォーマット検証 (Local)', () => {
    test('mcp.jsonが有効なJSONであること', () => {
        const rawData = fs.readFileSync(path.join(__dirname, '../mcp.json'), 'utf-8');
        expect(() => JSON.parse(rawData)).not.toThrow();
        const data = JSON.parse(rawData);
        expect(data).toHaveProperty('mcpVersion');
    });

    test('openapi.yamlが有効なYAMLであること', () => {
        const rawData = fs.readFileSync(path.join(__dirname, '../openapi.yaml'), 'utf-8');
        expect(() => yaml.parse(rawData)).not.toThrow();
        const data = yaml.parse(rawData);
        expect(data.openapi).toBe('3.1.0');
    });
});

test.describe('ステータスバッジのUIテスト (Local)', () => {
    test('Gatewayが正常な場合「Gateway Operational」が表示されること', async ({ page }) => {
        // APIリクエストをモックして正常系をシミュレート
        await page.route('https://api.sakutto.works/v1/normalize_web_data', async route => {
            await route.fulfill({ status: 204 });
        });

        await page.goto('/');
        const badge = page.locator('#system-status');
        await expect(badge).toHaveText(/Gateway Operational/);
        await expect(badge).toHaveClass(/operational/);
    });

    test('Gatewayが503エラーの場合「Gateway Unavailable」が表示されること', async ({ page }) => {
        // APIリクエストをモックして異常系をシミュレート
        await page.route('https://api.sakutto.works/v1/normalize_web_data', async route => {
            await route.fulfill({ status: 503 });
        });

        await page.goto('/');
        const badge = page.locator('#system-status');
        await expect(badge).toHaveText(/Gateway Unavailable/);
        await expect(badge).toHaveClass(/degraded/);
    });
});