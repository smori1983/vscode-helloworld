import * as vscode from 'vscode';
import * as commands from './commands';

export function activate(context: vscode.ExtensionContext) {
	console.log('The extension "helloworld" is now active!');

	commands.register(context);
}

export function deactivate() {}
