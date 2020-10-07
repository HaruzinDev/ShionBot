const Discord = require('discord.js')

module.exports.run = (client, message, args) => {

    const bug = args.join(" ")
    const canal = client.guilds.cache.get("719568776063877261").channels.cache.get("763229917344956448")
    const botA = client.user.displayAvatarURL()

    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} // ${message.guild.name}`)
    .setColor(`${client.config.cor}`)
    .setDescription(`Bug:\n**${bug}**\n\nID do author do report: ${message.author.id}`)
    .setTimestamp()
    .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)

    const embed2 = new Discord.MessageEmbed()
    .setAuthor(`Reporte de bug enviado`, `${botA}`)
    .setColor(`${client.config.cor}`)
    .setDescription(`Seu Reporte de Bug foi enviado para o [Servidor de suporte](https://discord.gg/NjfeECe).`)
    .setTimestamp()
    .setFooter(`Obrigado por usar nosso bot - assinado: TeamShion`, `${botA}`)

    canal.send(embed).then(msg => {
        message.channel.send(embed2)
    })
}
