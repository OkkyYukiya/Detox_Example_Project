import { by, expect, element } from 'detox';

describe('Example', () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  it('ホーム画面からPost画面に遷移すること', async () => {
    await expect(element(by.text('Home Screen'))).toBeVisible();
    await element(by.text('GO TO POST SCREEN')).tap();

    await expect(element(by.text('Post Screen'))).toBeVisible();
  });
});
