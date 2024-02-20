const vscode = require('vscode');

function sendMessageToDiscord(message) {
	// Access the user's settings to get the webhook URL
	const config = vscode.workspace.getConfiguration('sendtodiscord');
	const webhookUrl = config.get('webhookUrl');

	if (!webhookUrl) {
		vscode.window.showErrorMessage(
			'Discord webhook URL is not configured. Please set it in the extension settings.'
		);
		return;
	}

	const formattedMessage = '``` ' + message + ' ```';

	fetch(webhookUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			content: formattedMessage,
		}),
	})
		.then((response) => {
			if (response.ok) {
				// Check if the response status is 2xx
				vscode.window.showInformationMessage(
					'Successfully sent message to Discord'
				);
			} else {
				// Handle HTTP errors
				return response.json().then((error) => {
					throw new Error(`Discord API returned an error: ${error}`);
				});
			}
		})
		.catch((error) =>
			vscode.window.showErrorMessage(
				`Error sending message to Discord: ${error}`
			)
		);
}

function activate(context) {
	let disposable = vscode.commands.registerCommand(
		'sendtodiscord.sendToDiscord',
		function () {
			let activeEditor = vscode.window.activeTextEditor;
			if (activeEditor) {
				let text = activeEditor.document.getText(activeEditor.selection);
				if (text) {
					// Send the selected text to Discord
					sendMessageToDiscord(text);
					vscode.window.showInformationMessage(
						'Sent selected text to Discord!'
					);
				} else {
					vscode.window.showInformationMessage('No text selected.');
				}
			}
		}
	);

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate,
};
