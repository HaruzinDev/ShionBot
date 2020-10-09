module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return


    const db = require("quick.db")
    const Discord = require('discord.js')  
    let valor;

    let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))

    
    if(!user) return message.channel.send(`Você não me disse um usuário para adicionar dinheiro, ${message.author}!`)
  
    
    if(args[0] === 'banco') {
        valor = args.slice(2).join(" ")
        if(isNaN(valor)) return message.channel.send("Isso não é um número!")
        let bal = await db.add(`banco_${message.guild.id}_${user.id}`, valor)
        message.channel.send(`O usuário **${message.author}** adicionou **${valor}** no banco de **${user}**!`)
    }
    else {
        valor = args[1]
        if(isNaN(valor)) return message.channel.send("Isso não é um número!")
        let bal = await db.add(`money_${message.guild.id}_${user.id}`, valor)
        message.channel.send(`O usuário **${message.author}** adicionou **${valor}** na conta de **${user}**!`)
    
    }
}