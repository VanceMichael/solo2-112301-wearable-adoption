import assert from 'node:assert/strict';
import test from 'node:test';
import { readMaterials } from '../tools/verify-materials.mjs';

test('合成资料字段与身份可读取', async () => {
  const { schema, records } = await readMaterials();
  assert.ok(schema.fields.includes('id'));
  assert.ok(records.length >= 3);
  assert.equal(new Set(records.map(record => record.id)).size, records.length);
});

test('记录包含可追溯版本与时间字段', async () => {
  const { records } = await readMaterials();
  assert.ok(records.every(record => record.version && record.observedAt));
});
