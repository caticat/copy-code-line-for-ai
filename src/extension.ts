import * as vscode from 'vscode';

// Claude Code 2.x 使用 claude-vscode.focus；旧版本可能用其他 id
const CLAUDE_CODE_COMMAND_IDS = ['claude-vscode.focus', 'claude-code.focusInput', 'anthropic.claude-code.focusInput'];

async function focusClaudeCodeInput(): Promise<void> {
  for (const commandId of CLAUDE_CODE_COMMAND_IDS) {
    try {
      await vscode.commands.executeCommand(commandId);
      return;
    } catch {
      // Extension may not be installed, try next
    }
  }
}

export function activate(context: vscode.ExtensionContext): void {
  const disposable = vscode.commands.registerCommand('copyCodeLine.copy', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showWarningMessage('Copy Code Line: 请先打开一个文件');
      return;
    }

    const selection = editor.selection;
    const isEmpty = selection.isEmpty;

    // 0-based -> 1-based; 无选区时使用当前行
    const startLine = isEmpty ? selection.active.line : selection.start.line;
    const endLine = isEmpty ? selection.active.line : selection.end.line;

    const relativePath = vscode.workspace.asRelativePath(editor.document.uri, false);
    const config = vscode.workspace.getConfiguration('copyCodeLine');

    const prefix = config.get<string>('prefix', '@');
    const pathSep = config.get<string>('pathLineSeparator', ':');
    const lineSep = config.get<string>('lineRangeSeparator', '-');

    const result = `${prefix}${relativePath}${pathSep}${startLine + 1}${lineSep}${endLine + 1}`;

    await vscode.env.clipboard.writeText(result);

    const autoFocus = config.get<boolean>('autoFocusClaudeCode', true);
    if (autoFocus) {
      await focusClaudeCodeInput();
    }

    vscode.window.showInformationMessage(`已复制: ${result}`);
  });

  context.subscriptions.push(disposable);
}

export function deactivate(): void {}
