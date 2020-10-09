module.exports.run = async (client, message, args) => {



    const db = require('quick.db')
    const Discord = require('discord.js')

    let namecoin = await db.fetch(`coin_${message.guild.id}`)
    if(namecoin === null) namecoin = "ShionCoin"

    const value = args.join(" ")

    if(isNaN(value)) return message.channel.send(`Você tem que falar apenas o número!`)

    else {
    const time = await db.set(`dailytotal_${message.guild.id}`, value)
    message.channel.send(`O valor máximo do daily foi setado para **${value} ${namecoin}**`)
    }



}