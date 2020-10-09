module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return


    const db = require("quick.db")
    const Discord = require('discord.js')

    let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    const valor = args.slice(1).join(" ")

    if(isNaN(valor)) return message.channel.send("Isso não é um número!")
    if(!user) return message.channel.send(`Você não me disse um usuário para remover dinheiro, ${message.author}!`)

    let bal = await db.subtract(`money_${message.guild.id}_${user.id}`, valor)
    message.channel.send(`O usuário **${message.author.id}** removeu **${valor}** da conta de **${user}**!`)

}