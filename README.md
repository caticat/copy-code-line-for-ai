# Copy Code Line For AI

[中文文档](README.zh.md)

The fastest way to reference your code in [Claude Code](https://claude.ai/code). Select any code block, press `Ctrl+Shift+C`, and the reference (e.g. `@src/foo.ts:10-20`) is instantly sent to Claude Code's input box—ready for questions, reviews, or fixes without any manual copy-paste.

Works with VS Code and Cursor.

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
- **No selection**: When nothing is selected, copies the current line reference

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
|---------|------|---------|-------------|
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
