module.exports.run = async (client, message, args) => {

    const db = require('quick.db')
    const Discord = require('discord.js')
    

    let namecoin = await db.fetch(`coin_${message.guild.id}`)
    if(namecoin === null) namecoin = "ShionCoin"
    
    let mao = await db.fetch(`money_${message.guild.id}_${message.author.id}`)
    if(mao === null) mao = 0

    let banco = await db.fetch(`banco_${message.guild.id}_${message.author.id}`)
    if(banco === null) banco = 0

    let emojicoin = await db.fetch(`emojicoin_${message.guild.id}`)
    if(emojicoin === null) emojicoin = ":money:"
    let networth = mao + banco


    const embed = new Discord.MessageEmbed()
    .setDescription(`Dados sobre ${message.author}`)
    .addField(`Em mãos ${emojicoin}`, `Você tem **${mao} ${namecoin}** em mãos`)
    .addField("Banco :bank:", `Você tem **${banco} ${namecoin}** guardados no banco!`)
    .addField(`Total :bank: + ${emojicoin}`, `O total do seu dinheiro é **${networth} ${namecoin}**`)
    message.channel.send(embed)


}