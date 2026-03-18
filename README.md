# Copy Code Line For AI

The fastest way to reference your code in [Claude Code](https://claude.ai/code). Select any code block, press `Ctrl+Shift+C`, and the reference (e.g. `@src/foo.ts:10-20`) is instantly sent to Claude Code's input box—ready for questions, reviews, or fixes without any manual copy-paste.

Works with VS Code and Cursor.

[中文文档](#中文文档)

## Why Claude Code users love this

When chatting with Claude Code, you often need to point Claude at a specific piece of code. Without this extension, you'd have to manually type the file path and line numbers. With it:

1. Select the code you want Claude to look at
2. Press `Ctrl+Shift+C`
3. Claude Code input box auto-focuses and the reference appears — just start typing your question

Claude Code natively understands the `@file:line` format and will read the exact lines you referenced.

> **Note:** Claude Code may auto-convert the reference format — e.g. `@public/rpc/proto_id.pb.go:134-136` becomes `@public/rpc/proto_id.pb.go#134-136`. This is normal; both formats point to the same lines.

## Features

- **Claude Code integration**: Auto-focuses Claude Code input box after copy; reference appears instantly, ready to send
- **Core**: Copy "relative path + line range" after selecting code — output format: `@public/rpc/friend.pb.go:162-167`
- **Configurable format**: Prefix `@`, path-line separator `:`, and line range separator `-` are all customizable
- **Shortcut**: `Ctrl+Shift+C` (Mac: `Cmd+Shift+C`)
- **Context menu**: Right-click in editor, find the command under Copy/Paste section
- **No selection**: When nothing is selected, copies the current line reference and auto-pastes to Claude Code input box

## Usage

### Basic

1. Select a code block in the editor, or stay on a line (copies current line when nothing is selected)
2. Press `Ctrl+Shift+C` or run "Copy Code Line For AI: Copy Reference" from the command palette
3. Content is copied to clipboard; if auto-focus Claude Code is enabled, it switches to Claude Code input box and content usually appears automatically—otherwise paste with `Ctrl+V`

### Command Palette

Press `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) to open the command palette, then type `Copy Code Line` or `Copy Code Line For AI` to find the extension command.

## Settings

Search for `copyCodeLineForAI` in VS Code/Cursor settings to adjust:

| Setting | Type | Default | Description |
| ------- | ---- | ------- | ----------- |
| `copyCodeLineForAI.prefix` | string | `@` | Path prefix character, e.g. `@` or `#` |
| `copyCodeLineForAI.pathLineSeparator` | string | `:` | Separator between path and line numbers |
| `copyCodeLineForAI.lineRangeSeparator` | string | `-` | Line range separator, e.g. `-` in `162-167` |
| `copyCodeLineForAI.autoFocusClaudeCode` | boolean | `true` | Auto-focus Claude Code input box after copy; content usually appears directly |

### Edit via settings.json

1. Press `Ctrl+,` (Mac: `Cmd+,`) to open settings
2. Click `{}` in the top right to open JSON editor
3. Add configuration, for example:

```json
{
  "copyCodeLineForAI.prefix": "@",
  "copyCodeLineForAI.pathLineSeparator": ":",
  "copyCodeLineForAI.lineRangeSeparator": "-",
  "copyCodeLineForAI.autoFocusClaudeCode": true
}
```

### Format examples

- Default: `@src/foo.ts:10-20`
- Use `#` prefix: `copyCodeLineForAI.prefix: "#"` → `#src/foo.ts:10-20`
- Use `#` as path-line separator: `copyCodeLineForAI.pathLineSeparator: "#"` → `@src/foo.ts#10-20`
- Use `~` as line range separator: `copyCodeLineForAI.lineRangeSeparator: "~"` → `@src/foo.ts:10~20`

## Installation

### Development

```bash
git clone <repo-url>
cd copy-code-line-for-ai
npm install
npm run compile
```

Press F5 to launch Extension Development Host for debugging.

### Package & Install

```bash
npm install -g @vscode/vsce
vsce package
```

After getting the `.vsix` file, choose "Install from VSIX" in the Extensions view.

## License

MIT License. See [LICENSE](LICENSE) for details.

---

## 中文文档

与 [Claude Code](https://claude.ai/code) 配合使用的最快代码引用方式。选中任意代码块，按 `Ctrl+Shift+C`，引用（如 `@src/foo.ts:10-20`）会立即发送到 Claude Code 输入框——无需手动复制粘贴，直接开始提问、Review 或修 Bug。

适用于 VS Code 与 Cursor。

### 为什么 Claude Code 用户喜欢它

在与 Claude Code 对话时，经常需要指向某段具体的代码。没有这个扩展，你需要手动输入文件路径和行号。有了它：

1. 选中你想让 Claude 查看的代码
2. 按 `Ctrl+Shift+C`
3. Claude Code 输入框自动聚焦，引用直接出现——开始输入你的问题即可

Claude Code 原生理解 `@文件:行号` 格式，会精确读取你引用的那几行代码。

> **提示：** Claude Code 可能会自动转换引用格式——例如 `@public/rpc/proto_id.pb.go:134-136` 会变为 `@public/rpc/proto_id.pb.go#134-136`，这是正常现象，两种格式指向同一段代码。

### 功能

- **Claude Code 集成**：复制后自动聚焦 Claude Code 输入框，引用即时出现，直接可发
- **核心**：选中代码后复制「相对路径 + 行号范围」，输出格式如 `@public/rpc/friend.pb.go:162-167`
- **格式可配置**：前缀 `@`、路径-行号分隔符 `:`、行号分隔符 `-` 均可自定义
- **快捷键**：`Ctrl+Shift+C`（Mac: `Cmd+Shift+C`）
- **右键菜单**：编辑器中右键，在复制/粘贴区域可找到本命令
- **无选区**：无选区时自动复制当前行引用，并自动粘贴到 Claude Code 输入框

### 使用方法

1. 在编辑器中选中一段代码，或直接停留在某行（无选区时复制当前行）
2. 按 `Ctrl+Shift+C` 或通过命令面板执行「Copy Code Line For AI: Copy Reference」
3. 内容已复制到剪贴板；若开启自动聚焦 Claude Code，会切换到 Claude Code 输入框，内容通常会自动出现，若无则按 `Ctrl+V` 粘贴

命令面板：`Ctrl+Shift+P`（Mac: `Cmd+Shift+P`）打开后输入 `Copy Code Line` 可找到本命令。

### 设置方法

在 VS Code/Cursor 设置中搜索 `copyCodeLineForAI` 可调整以下选项：

| 设置项 | 类型 | 默认值 | 说明 |
| ------ | ---- | ------ | ---- |
| `copyCodeLineForAI.prefix` | string | `@` | 路径前缀字符，如 `@` 或 `#` |
| `copyCodeLineForAI.pathLineSeparator` | string | `:` | 路径与行号之间的分隔符 |
| `copyCodeLineForAI.lineRangeSeparator` | string | `-` | 行号范围分隔符，如 `162-167` 中的 `-` |
| `copyCodeLineForAI.autoFocusClaudeCode` | boolean | `true` | 复制后自动聚焦 Claude Code 输入框，内容通常会直接出现在输入框中 |

### 安装

```bash
# 开发调试
git clone <repo-url>
cd copy-code-line-for-ai
npm install
npm run compile
# 按 F5 启动调试

# 打包安装
npm install -g @vscode/vsce
vsce package
# 得到 .vsix 后在扩展视图选择「从 VSIX 安装」
```
