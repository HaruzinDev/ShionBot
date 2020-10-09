const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {

    let anuncio = args.join(" ")

    const embed = new MessageEmbed()
    .setColor(`${client.config.cor}`)
    .setDescription(`${anuncio}`)
    .setThumbnail(`${message.guild.iconURL({ dynamic: true, format: 'png', size: 2048 })}`)
    .setTimestamp()

    message.channel.send(embed)
}