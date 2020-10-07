module.exports.run = (client, message, args) => {
    const Discord = require('discord.js')

    let botA = client.user.displayAvataURL()

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Convite Shion Yorigami`, `${botA}`)
    .setColor(`${clienet.config.cor}`)
    .setThumbnail(`${client.guilds.cache.get('719568776063877261').iconURL({ dynamic: true, format: 'png', size: 2048 })}`)
    .setDescription(`
    **Servidor de Suporte:**\n [Link do convite](https://discord.gg/NjfeECe)\n
    **Me convide para o seu servidor:**\n [Convite-bot](https://discord.com/oauth2/authorize?client_id=763206138421968947&scope=bot&permissions=469822518)\n
    `)
    .setTimestamp()
    .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)

    message.channel.send(embed)
}