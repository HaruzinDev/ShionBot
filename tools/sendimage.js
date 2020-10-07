const Discord = require('discord.js')

module.exports.wEmbedA = (client, message, aut, wfname) => {

    let botA = client.user.displayAvatarURL()


    const embed = new Discord.MessageEmbed()
        .setColor(client.config.cor)
        .setDescription(`Shipando ${aut} com **${wfname}**`)
        .attachFiles([`./images/shipw.png`])
	    .setImage(`attachment://shipw.png`)
        .setTimestamp()
        .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)
        
        message.channel.send(embed)
}

module.exports.wEmbedM = (client, message, menção, wfname) => {

    let botA = client.user.displayAvatarURL()


    const embed = new Discord.MessageEmbed()
        .setColor(client.config.cor)
        .setDescription(`Shipando ${menção} com **${wfname}**`)
        .attachFiles([`./images/shipw.png`])
	    .setImage(`attachment://shipw.png`)
        .setTimestamp()
        .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)

        message.channel.send(embed)
}

module.exports.shipIN = (client, message, mensão1, mensão2) => {

    let botA = client.user.displayAvatarURL()


    const embed = new Discord.MessageEmbed()
        .setColor(client.config.cor)
        .setDescription(`Shipando ${mensão1} com **${mensão2}**`)
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