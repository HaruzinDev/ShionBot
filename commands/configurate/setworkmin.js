const db = require('quick.db')
const Discord = require('discord.js')


module.exports.run = async (client, message, args) => {


    const min = args.join(" ")

    if(isNaN(min)) return message.channel.send("Isso não é um número válido!")

    if(!min) return message.channel.send("Você não disse um número!")

    let namecoin = await db.fetch(`coin_${message.guild.id}`)
    if(namecoin === null) namecoin = "ShionCoin"

    try {
        message.channel.send(`O valor mínimo do work foi setado para **${min} ${namecoin}**!`)
        db.set(`minwork_${message.guild.id}`, min)
    } catch (e) {
        message.channel.send("Ocorreu um erro ao setar o valor mínimo do work.")
    }
    }
