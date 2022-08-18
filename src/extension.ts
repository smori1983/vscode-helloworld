import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('The extension "helloworld" is now active!');

	let disposable1 = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		vscode.window.showInformationMessage('Hello VS Code');
		vscode.window.setStatusBarMessage('Hello VS Code (status bar)');
	});
	context.subscriptions.push(disposable1);

	let disposable2 = vscode.commands.registerCommand('helloworld.quickPick', () => {
		vscode.window.showQuickPick(['a', 'b', 'c', 'd', 'e']);
	});
	context.subscriptions.push(disposable2);

	let disposable3 = vscode.commands.registerCommand('helloworld.inputBox', async () => {
		const input = await vscode.window.showInputBox();
		console.log(input);
	});
	context.subscriptions.push(disposable3);
}

export function deactivate() {}
