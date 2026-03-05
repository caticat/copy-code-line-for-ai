# Copy Code Line

复制代码段所在文件的相对路径和行号范围，输出格式如 `@public/rpc/friend.pb.go:162-167`。

## 功能

- **核心**：选中代码后复制「相对路径 + 行号范围」
- **格式可配置**：前缀 `@`、路径-行号分隔符 `:`、行号分隔符 `-` 均可自定义
- **Claude Code 集成**：复制后可选择自动聚焦 Claude Code 输入框，便于 Ctrl+V 粘贴
- **快捷键**：`Ctrl+Shift+C`（Mac: `Cmd+Shift+C`）

## 使用

1. 在编辑器中选中一段代码（不选中则复制当前行）
2. 按 `Ctrl+Shift+C` 或通过命令面板执行「Copy Code Line Reference」
3. 内容已复制到剪贴板，若开启 Claude Code 聚焦则会自动切换到其输入框，按 `Ctrl+V` 粘贴即可

## 配置

| 设置 | 默认值 | 说明 |
|------|--------|------|
| `copyCodeLine.prefix` | `@` | 路径前缀字符 |
| `copyCodeLine.pathLineSeparator` | `:` | 路径与行号之间的分隔符 |
| `copyCodeLine.lineRangeSeparator` | `-` | 行号范围分隔符 |
| `copyCodeLine.autoFocusClaudeCode` | `true` | 复制后自动聚焦 Claude Code 输入框 |

## 安装

1. 运行 `npm install` 安装依赖
2. 按 F5 在开发主机中调试
3. 或使用 `vsce package` 打包为 `.vsix` 安装
