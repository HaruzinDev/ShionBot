const Discord = require('discord.js')

module.exports.shipIN = (client, message, aut, menção) => {

    let botA = client.user.displayAvatarURL()


    const embed = new Discord.MessageEmbed()
        .setColor(client.config.cor)
        .setDescription(`Shipando ${aut} com **${menção}**`)
        .attachFiles([`./images/ship.png`])
	    .setImage(`attachment://ship.png`)
        .setTimestamp()
        .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)

        message.channel.send(embed)
}

module.exports.perfilI = (client, message, idu) => {
    
    const attachment = new Discord.MessageAttachment('./images/perfil.png');
    
    
    message.channel.send(attachment);
}