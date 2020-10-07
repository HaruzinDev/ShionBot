module.exports.run = async (client, message) => {
if(!message.author.id === "638157424099852288" || !message.author.id === "417381720879529995") return message.channel.send('Eita... Sabia que você acabou de achar um comando escondido?\nÉ uma pena você não poder usa-lo.')
// module.exports = {
// 	name: 'reload',
// 	description: 'Reloads a command',
// 	args: true,
// 	execute(message, args) {
// 		const commandName = args[0].toLowerCase();
// 		const command = message.client.commands.get(commandName)
// 			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

// 		if (!command) {
// 			return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);
// 		}

// 		delete require.cache[require.resolve(`./${command.name}.js`)];

// 		try {
// 			const newCommand = require(`./${command.name}.js`);
// 			message.client.commands.set(newCommand.name, newCommand);
// 			message.channel.send(`Command \`${command.name}\` was reloaded!`);
// 		} catch (error) {
// 			console.error(error);
// 			message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
// 		}
// 	},
// };
}