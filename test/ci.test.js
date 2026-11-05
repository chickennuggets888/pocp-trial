import { test } from 'node:test';
import assert from 'node:assert/strict';

test('fails in CI', () => { if (process.env.GITHUB_ACTIONS === 'true') assert.fail('deliberate'); });
