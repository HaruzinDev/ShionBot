const client = require('nekos.life');
const neko = new client();
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {


    const pess = message.mentions.users.first()
    const img = await neko.sfw.pat()

    if(pess.id === message.author.id) return message.reply("Você não pode fazer carinho em si mesmo!")
    if(!pess) return message.reply("Você não falou em quem vai fazer carinho!")


    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`${message.author} fez carinho em ${pess}`)
    .setImage(img.url)

    message.channel.send(embed)


    
}