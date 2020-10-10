const db = require('quick.db')
const Discord = require('discord.js')


module.exports = {
    name: 'setworkmax',
	async execute(message, args, client) {

        const max = args.join(" ")

        if(isNaN(max)) return message.channel.send("Isso não é um número válido!")
    
        if(!max) return message.channel.send("Você não disse um número!")
    
        let namecoin = await db.fetch(`coin_${message.guild.id}`)
        if(namecoin === null) namecoin = "ShionCoin"
    
        try {
            message.channel.send(`O valor máximo do work foi setado para **${max} ${namecoin}**!`)
            db.set(`maxwork_${message.guild.id}`, max)
        } catch (e) {
            message.channel.send("Ocorreu um erro ao setar o valor maximo do work.")
        }
    }
}