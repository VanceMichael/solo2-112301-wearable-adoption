# 多形态穿戴设备的场景留存与服务入口评估

资料包含合成的手表、戒指和耳机使用片段，提供设备代次、佩戴者和场景授权信息。

项目中的记录和字段约定均为本地合成资料，不能代表真实个人、机构或交易。`fixtures/schema.json` 说明资料字段，`fixtures/records.json` 提供少量可复现的交接记录。

使用 Node.js 22.23.4。首次准备可执行 `npm ci --ignore-scripts --offline`，检查资料使用 `npm run check:materials`，运行构建检查使用 `npm run build`，运行测试使用 `npm test`。项目只依赖 Node.js 标准库。


## 业务资料

`fixtures/domain-materials.json` 收录穿戴渠道替代、服务留存和套餐资格相关的字段约定及小型演练资料。资料用于练习业务记录的含义与关联，所有名称、状态和数值均为本地合成。

使用 Node.js 22.23.4。执行 `npm test` 检查资料及现有入口，执行 `npm run build` 验证项目脚本，执行 `npm run check:materials` 检查通用资料入口。
