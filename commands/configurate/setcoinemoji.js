module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return

    const db = require("quick.db")
    const Discord = require('discord.js')  

    let emoji = await db.fetch(`emojicoin_${message.guild.id}`)

    message.channel.send(`Mande o id do emoji agora (60 segundos)`)

//<:money:763415435004608526>

let vezes = 0

const filter = m => m.attachments && m.author.id === message.author.id;
const collector = message.channel.createMessageCollector(filter, { time: 60000, max: 1 });

let emojiNow = []

collector.on('collect', m => {

    let emoji2 = m.content.slice(0).trim().split(/ +/g)

    if(!emoji2[0].startsWith("<") && !emoji2[0].endsWith(">")) return

    emojiNow.push(emoji2)
    
    db.set(`emojicoin_${message.guild.id}`, emoji2)
    vezes++
});

collector.on('end', m => {
    if(vezes === 1){
    message.channel.send(`O emoji ${emojiNow} foi setado como representante do dinheiro no seu servidor`)
    } else if(vezes === 0){
        message.channel.send('O emoji que você enviou não era válido (Coloque emoji personalizado) ou o tempo se esgotou.')
    }
})
}