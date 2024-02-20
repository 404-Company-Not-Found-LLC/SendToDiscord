# SendToDiscord

SendToDiscord is a Visual Studio Code extension that allows you to quickly send selected text or code snippets directly to a Discord channel through a webhook. This tool is perfect for developers who want to share code snippets, errors, or any text with their team on Discord efficiently without leaving their coding environment.

## Features

- **Send Selected Text**: Easily send any selected text or code snippets from your editor to a configured Discord channel.
- **Custom Webhook Configuration**: Configure your own Discord webhook through the extension settings for personalized use.
- **Quick Access**: Use the context menu (right-click) or a keyboard shortcut to send text to Discord, making it seamless to share information while coding.

## Getting Started

### Prerequisites

- Visual Studio Code (version 1.38.0 or higher)
- A Discord account and a server where you can create webhooks

### Installation

1. Open Visual Studio Code.
2. Navigate to the Extensions view by clicking on the square icon on the sidebar or pressing `Ctrl+Shift+X`.
3. Search for `SendToDiscord`.
4. Click on the Install button.

### Configuration

1. Obtain a webhook URL from your Discord server:
   - Go to Server Settings -> Integrations -> Webhooks.
   - Create a new webhook and copy its URL.
2. Open the Command Palette in VS Code by pressing `Ctrl+Shift+P`.
3. Type `Preferences: Open Settings (JSON)` and press Enter.
4. Add or modify the following line in your settings file, replacing `<YOUR_WEBHOOK_URL>` with your actual webhook URL:

```json
"sendtodiscord.webhookUrl": "<YOUR_WEBHOOK_URL>"
```

### Usage

1. Select the text or code snippet you wish to send to Discord.
2. Right-click to open the context menu and select **"Send To Discord"**, or use the keyboard shortcut (configure this in the Keyboard Shortcuts settings).
3. The selected text will be sent to your Discord channel.

### Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repository and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

### License

Distributed under the MIT License.
