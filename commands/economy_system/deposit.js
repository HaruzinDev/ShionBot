module.exports.run = async (client, message, args) => {

    const db = require('quick.db')
    const Discord = require('discord.js')//vou pegar algo pra comer já eu volto

    let namecoin = await db.fetch(`coin_${message.guild.id}`)
    if(namecoin === null) namecoin = "ShionCoin"
    
    let mao = await db.fetch(`money_${message.guild.id}_${message.author.id}`)
    if(mao === null) mao = 0

    const valor = args[0]
    if(!valor) return message.channel.send("Você não disse um valor para depositar!")
    if(valor <= 0) return message.channel.send('Esse falor não pode ser depositado...')
    if(isNaN(valor)) return message.channel.send("Isso não é um número!")
    
    if(mao < 1) return message.channel.send(`Você não tem dinheiro para depositar!`)

    if(valor > mao) return message.channel.send(`Você não tem todo esse dinheiro para depositar! Você tem **${mao} ${namecoin}**`)

    else {
        await db.add(`banco_${message.guild.id}_${message.author.id}`, valor)
        await db.subtract(`money_${message.guild.id}_${message.author.id}`, valor)
        message.channel.send(`Você depositou **${valor} ${namecoin}** em seu banco!`)
    }
}