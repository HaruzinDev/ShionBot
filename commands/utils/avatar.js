module.exports.run = (client, message, args) => {
    const Discord = require('discord.js');



    const botA = client.user.displayAvatarURL();

    let pessoa = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author)

    const pessA = pessoa.user

    const embed1 = new Discord.MessageEmbed()
    .setColor(client.config.cor)
    .setAuthor(`Avatar de ${pessA.tag}.`)
    .setImage(`${pessA.avatarURL({ dynamic: true, format: 'png', size: 2048 })}`)
    .setDescription(`[Download do avatar](${pessA.avatarURL({ dynamic: true, format: 'png', size: 2048 })})`)
    .setTimestamp()
    .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)
        
    message.channel.send(embed1)
}