exports.run = async (client, message) => {


	const Discord = require('discord.js')
	const discloud = require("discloud-status");

	let r = discloud.ram();

	let botA = client.user.displayAvatarURL();

	message.delete();
	
    const ms = await message.channel.send("Pong!").then(message => message.delete())
	const clientms = ms.createdTimestamp - message.createdTimestamp;


	const embed = new Discord.MessageEmbed()
	.setColor(client.config.cor)
	.setThumbnail(`${client.config.clockimg}`)
	.setTitle("Veja seu ping:", `${botA}`)
	.addField(`Seu ping é:`, + clientms + `ms`)
	.addField(`Memoria Ram:`, `${r}`, false)
	.addField(`API: `,`${Math.round(client.ws.ping)}ms`, false)
	.setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)


	message.channel.send(embed)
}