module.exports.run = async (client, message, args) => {

    const db = require('quick.db')
    const Discord = require('discord.js')

    const id = args.join(" ")

    message.channel.send(`Você tem certeza que quer setar o canal <#${id}> como logger de mensagens deletadas?`).then(msg => {
        msg.react("✅")
        msg.react("❌")

        const aceitaFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
        const recusaFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

        const aceita = msg.createReactionCollector(aceitaFilter, {timer: 20000});
        const recusa = msg.createReactionCollector(recusaFilter, {timer: 20000});

        aceita.on('collect', r => {
            msg.delete()
            db.set(`logmsg_${message.guild.id}`, id)
            message.channel.send(`O canal <#${id}> foi setado como o canal de logger!`).then(msg => msg.delete({timeout: 30000}))
        })

        recusa.on('collect', r =>{
            msg.delete()
            message.channel.send(`Operação cancelada.`).then(msg => msg.delete({timeout: 30000}))
        })
    })//olha o guildMemberadd e remove
}