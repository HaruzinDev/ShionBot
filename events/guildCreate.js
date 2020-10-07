module.exports = (client, guild) => {

    const Discord = require('discord.js')

    let botA = client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 })

    const embed = new Discord.MessageEmbed()
    .setColor(`${client.config.cor}`)
    .setAuthor(`Adicionada`, `${botA}}`)
    .setThumbnail(`${guild.iconURL({ dynamic: true, format: 'png', size: 2048 })}`)
    .setDescription(`**Shion Yorigami (ShionBot) foi adicionada no servidor:\n\nId do servidor:** ${guild.id}\n\n**Nome do servidor:** ${guild.name}`)
    .setTimestamp()
    .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)

    client.guilds.cache.get('719568776063877261').channels.cache.get('763267997392437289').send(embed)
}