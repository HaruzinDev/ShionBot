const client = require('nekos.life');
const neko = new client();
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    const pess = message.mentions.users.first()
    const img = await neko.sfw.hug()

    if(pess.id === message.author.id) return message.reply("Você não pode se abraçar!")
    if(!pess) return message.reply("Você não falou quem vai abraçar!")

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`${message.author} abraçou ${pess}`)
    .setImage(img.url)

    message.channel.send(embed)
    
}