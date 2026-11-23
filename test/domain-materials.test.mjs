import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
const data = JSON.parse(await readFile(new URL('../fixtures/domain-materials.json', import.meta.url), 'utf8'));
test('合成业务资料和字段契约可读取', () => {
  assert.ok(data.title);
  assert.match(data.source_note, /合成/);
  assert.ok(data.contract.length > 80);
  assert.ok(Object.keys(data.tables).length >= 5);
  for (const [name, records] of Object.entries(data.tables)) {
    assert.ok(records.length > 0, `${name} 没有演练记录`);
    for (const row of records) assert.ok(Object.keys(row).length > 1);
  }
});
