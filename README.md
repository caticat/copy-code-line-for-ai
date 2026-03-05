# Copy Code Line For AI

复制代码段所在文件的相对路径和行号范围，输出格式如 `@public/rpc/friend.pb.go:162-167`。适用于 VS Code 与 Cursor。

## 功能

- **核心**：选中代码后复制「相对路径 + 行号范围」
- **格式可配置**：前缀 `@`、路径-行号分隔符 `:`、行号分隔符 `-` 均可自定义
- **Claude Code 集成**：复制后可选择自动聚焦 Claude Code 输入框，内容通常会直接出现在输入框中
- **快捷键**：`Ctrl+Shift+C`（Mac: `Cmd+Shift+C`）
- **右键菜单**：编辑器中右键，在复制/粘贴区域可找到本命令
- **无选区**：无选区时自动复制当前行引用

## 使用方法

### 基本使用

1. 在编辑器中选中一段代码，或直接停留在某行（无选区时复制当前行）
2. 按 `Ctrl+Shift+C` 或通过命令面板执行「Copy Code Line For AI: Copy Reference」
3. 内容已复制到剪贴板；若开启自动聚焦 Claude Code，会切换到 Claude Code 输入框，内容通常会自动出现，若无则按 `Ctrl+V` 粘贴

### 命令面板

`Ctrl+Shift+P`（Mac: `Cmd+Shift+P`）打开命令面板，输入 `Copy Code Line` 或 `Copy Code Line For AI` 可找到本扩展命令。

## 设置方法

在 VS Code/Cursor 设置中搜索 `copyCodeLineForAI` 可调整以下选项：

| 设置项 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `copyCodeLineForAI.prefix` | string | `@` | 路径前缀字符，如 `@` 或 `#` |
| `copyCodeLineForAI.pathLineSeparator` | string | `:` | 路径与行号之间的分隔符 |
| `copyCodeLineForAI.lineRangeSeparator` | string | `-` | 行号范围分隔符，如 `162-167` 中的 `-` |
| `copyCodeLineForAI.autoFocusClaudeCode` | boolean | `true` | 复制后自动聚焦 Claude Code 输入框，内容通常会直接出现在输入框中 |

### 通过 settings.json 修改

1. `Ctrl+,`（Mac: `Cmd+,`）打开设置
2. 右上角点击 `{}` 打开 JSON 编辑
3. 添加配置，例如：

```json
{
  "copyCodeLineForAI.prefix": "@",
  "copyCodeLineForAI.pathLineSeparator": ":",
  "copyCodeLineForAI.lineRangeSeparator": "-",
  "copyCodeLineForAI.autoFocusClaudeCode": true
}
```

### 自定义格式示例

- 默认：`@src/foo.ts:10-20`
- 改为 `#` 前缀：`copyCodeLineForAI.prefix: "#"` → `#src/foo.ts:10-20`
- 改用 `#` 作路径-行号分隔符：`copyCodeLineForAI.pathLineSeparator: "#"` → `@src/foo.ts#10-20`
- 改用 `~` 作行号分隔符：`copyCodeLineForAI.lineRangeSeparator: "~"` → `@src/foo.ts:10~20`

## 安装

### 开发调试

```bash
git clone <repo-url>
cd copy-code-line-for-ai
npm install
npm run compile
```

按 F5 启动 Extension Development Host 进行调试。

### 打包安装

```bash
npm install -g @vscode/vsce
vsce package
```

得到 `.vsix` 文件后，在扩展视图中选择「从 VSIX 安装」即可。

## License

MIT License. See [LICENSE](LICENSE) for details.
