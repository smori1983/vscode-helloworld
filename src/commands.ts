import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
  command1(context);
  command2(context);
  command3(context);
}

function command1(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		vscode.window.showInformationMessage('Hello VS Code');
		vscode.window.setStatusBarMessage('Hello VS Code (status bar)');
	});

	context.subscriptions.push(disposable);
}

function command2(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('helloworld.quickPick', async () => {
		const choices: string[] = [
			'item:create',
			'item:update',
			'item:delete',
			'user:create',
			'user:update',
			'user:delete',
		];
		const options: vscode.QuickPickOptions = {
			title: 'Data operation',
			placeHolder: 'Choose an operation.',
		};
		const choice = await vscode.window.showQuickPick(choices, options);
		console.log('Selected: ' + choice);
	});

	context.subscriptions.push(disposable);
}

function command3(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('helloworld.inputBox', async () => {
		const input = await vscode.window.showInputBox();
		console.log(input);
	});

	context.subscriptions.push(disposable);
}
