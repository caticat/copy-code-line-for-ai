# Copy Code Line For AI

Select code, press `Ctrl+Shift+C`, and the reference (e.g. `@src/foo.ts:10-20`) is instantly pasted into your AI chat input — no manual copy-paste needed.

Works with VS Code and Cursor.

[中文文档](#中文文档)

## Features

- **Copy reference**: Copies `@relative/path:line` or `@relative/path:start-end` to clipboard
- **Auto-focus & paste**: After copy, automatically focuses and pastes into the target AI chat panel
- **Target options**: Claude Code, VS Code built-in Chat, or clipboard-only (`none`)
- **No selection**: When nothing is selected, copies the current line reference
- **Shortcut**: `Ctrl+Shift+C` (Mac: `Cmd+Shift+C`)
- **Context menu**: Right-click in editor → Copy/Paste section

## Usage

1. Select a code block, or place cursor on a line
2. Press `Ctrl+Shift+C`
3. The reference is copied and pasted into the configured AI chat input

> **Note:** Claude Code may auto-convert `@file:line` to `@file#line`. Both formats point to the same lines.

## Settings

Search `copyCodeLineForAI` in VS Code/Cursor settings:

| Setting | Type | Default | Description |
| ------- | ---- | ------- | ----------- |
| `copyCodeLineForAI.autoFocusTarget` | string | `"claudeCode"` | Target to auto-focus after copy: `claudeCode` (Claude Code), `vscodeChat` (VS Code built-in Chat), `none` (clipboard only) |
| `copyCodeLineForAI.prefix` | string | `"@"` | Prefix character, e.g. `@` or `#` |
| `copyCodeLineForAI.pathLineSeparator` | string | `":"` | Separator between path and line number |
| `copyCodeLineForAI.lineRangeSeparator` | string | `"-"` | Separator between start and end line |

### settings.json example

```json
{
  "copyCodeLineForAI.autoFocusTarget": "claudeCode",
  "copyCodeLineForAI.prefix": "@",
  "copyCodeLineForAI.pathLineSeparator": ":",
  "copyCodeLineForAI.lineRangeSeparator": "-"
}
```

### Output format examples

- Default: `@src/foo.ts:10-20`
- Single line (no selection): `@src/foo.ts:10`
- Use `#` as separator: `@src/foo.ts#10-20`

## Installation

```bash
npm install -g @vscode/vsce
vsce package
# Then: Extensions view → Install from VSIX
```

Press `F5` to launch the Extension Development Host for debugging.

## License

MIT License. See [LICENSE](LICENSE) for details.

---

## 中文文档

选中代码，按 `Ctrl+Shift+C`，引用（如 `@src/foo.ts:10-20`）立即粘贴到 AI 对话输入框，无需手动复制粘贴。

适用于 VS Code 与 Cursor。

## 功能

- **复制引用**：将 `@相对路径:行号` 或 `@相对路径:起始-结束` 复制到剪贴板
- **自动聚焦并粘贴**：复制后自动聚焦并粘贴到目标 AI 对话面板
- **目标可选**：Claude Code、VS Code 内置 Chat，或仅复制到剪贴板（`none`）
- **无选区**：未选中时自动复制当前行引用
- **快捷键**：`Ctrl+Shift+C`（Mac: `Cmd+Shift+C`）
- **右键菜单**：编辑器右键 → 复制/粘贴区域

## 使用方法

1. 选中代码块（或将光标停在某行）
2. 按 `Ctrl+Shift+C`
3. 引用已复制并粘贴到已配置的 AI 对话输入框

> **提示：** Claude Code 可能自动将 `@文件:行号` 转换为 `@文件#行号`，两种格式指向同一段代码。

## 设置

在 VS Code/Cursor 设置中搜索 `copyCodeLineForAI`：

| 设置项 | 类型 | 默认值 | 说明 |
| ------ | ---- | ------ | ---- |
| `copyCodeLineForAI.autoFocusTarget` | string | `"claudeCode"` | 复制后自动聚焦的目标：`claudeCode`（Claude Code）、`vscodeChat`（VS Code 内置 Chat）、`none`（仅复制到剪贴板） |
| `copyCodeLineForAI.prefix` | string | `"@"` | 路径前缀字符，如 `@` 或 `#` |
| `copyCodeLineForAI.pathLineSeparator` | string | `":"` | 路径与行号之间的分隔符 |
| `copyCodeLineForAI.lineRangeSeparator` | string | `"-"` | 行号范围分隔符 |

## 安装

```bash
npm install -g @vscode/vsce
vsce package
# 在扩展视图选择「从 VSIX 安装」
```

按 `F5` 启动调试。

## 许可证

MIT License. 详见 [LICENSE](LICENSE)。
