import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    retries: 0,
    workers: 1,
    reporter: 'list',
    use: {
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry',
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    ],
    // テスト実行時にローカルサーバーを自動起動
    webServer: {
        command: 'npx serve -p 3000 .',
        url: 'http://localhost:3000',
        reuseExistingServer: true,
    },
});