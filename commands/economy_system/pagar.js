module.exports.run = async (client, message, args) => {

    const db = require('quick.db')
    const Discord = require('discord.js')

    let namecoin = await db.fetch(`coin_${message.guild.id}`)
    if(namecoin === null) namecoin = "ShionCoin"

    const user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))

    const user2 = await db.fetch(`money_${message.guild.id}_${user.id}`)
    const author = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

    const valor = args.slice(1).join(" ")

    if(author < valor) return message.channel.send(`Você não tem todo esse dinheiro! Seu dinheiro atual é de **${author} ${namecoin}**`)

    else {
        message.channel.send(`Você tem certeza que quer enivar ${valor} ${namecoin} para ${user}? Reaja com ❌ para recusar a transação e ✅ para aceitar a transação`).then(msg => {
            msg.react("✅")
            msg.react("❌")

            const aceitaFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
            const recusaFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

            const aceita = msg.createReactionCollector(aceitaFilter, {timer: 20000});
            const recusa = msg.createReactionCollector(recusaFilter, {timer: 20000});
            
            aceita.on('collect', r => {
                msg.delete()
                db.subtract(`money_${message.guild.id}_${message.author.id}`, valor)
                db.add(`money_${message.guild.id}_${user.id}`, valor)
                message.channel.send(`Retirei **${valor} ${namecoin}** de sua conta e adicionei **${valor} ${namecoin}** na conta de **${user}**!`).then(messag => messag.delete({timeout: 60000}))
            })
            
            recusa.on('collect', r => {
                msg.delete()
                message.channel.send("A transação foi cancelada.").then(messag => messag.delete({timeout: 60000}))
                    })
                })
            }
        }
    
