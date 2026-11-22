import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const root = new URL('../fixtures/', import.meta.url);

export async function readMaterials(source = root) {
  const schema = JSON.parse(await readFile(new URL('schema.json', source), 'utf8'));
  const records = JSON.parse(await readFile(new URL('records.json', source), 'utf8'));
  if (!Array.isArray(records) || records.length === 0) throw new Error('资料记录不能为空');
  const fields = schema.fields;
  if (!Array.isArray(fields) || fields.length === 0) throw new Error('字段约定不能为空');
  for (const [index, record] of records.entries()) {
    for (const field of fields) {
      if (!(field in record)) throw new Error(`第 ${index + 1} 条资料缺少 ${field}`);
    }
  }
  const ids = new Set();
  for (const record of records) {
    if (ids.has(record.id)) throw new Error(`重复的资料身份 ${record.id}`);
    ids.add(record.id);
  }
  return { schema, records };
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  const { schema, records } = await readMaterials();
  console.log(JSON.stringify({ 状态: '合成资料可读取', 字段数: schema.fields.length, 记录数: records.length }, null, 2));
}
