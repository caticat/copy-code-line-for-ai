import * as vscode from 'vscode';

const CLAUDE_CODE_FOCUS_COMMAND = 'claude-vscode.focus';

export function activate(context: vscode.ExtensionContext): void {
  const disposable = vscode.commands.registerCommand('copyCodeLineForAI.copy', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showWarningMessage('Copy Code Line For AI: 请先打开一个文件');
      return;
    }

    const selection = editor.selection;
    const isEmpty = selection.isEmpty;

    // 0-based -> 1-based; 无选区时使用当前行
    const startLine = isEmpty ? selection.active.line : selection.start.line;
    const endLine = isEmpty ? selection.active.line : selection.end.line;

    const relativePath = vscode.workspace.asRelativePath(editor.document.uri, false);
    const config = vscode.workspace.getConfiguration('copyCodeLineForAI');

    const prefix = config.get<string>('prefix', '@');
    const pathSep = config.get<string>('pathLineSeparator', ':');
    const lineSep = config.get<string>('lineRangeSeparator', '-');

    const result = `${prefix}${relativePath}${pathSep}${startLine + 1}${lineSep}${endLine + 1}`;

    await vscode.env.clipboard.writeText(result);

    const autoFocus = config.get<boolean>('autoFocusClaudeCode', true);
    if (autoFocus) {
      try {
        await vscode.commands.executeCommand(CLAUDE_CODE_FOCUS_COMMAND);
      } catch {
        // Claude Code 未安装时静默跳过
      }
    }

    vscode.window.showInformationMessage(`已复制: ${result}`);
  });

  context.subscriptions.push(disposable);
}

export function deactivate(): void {}
