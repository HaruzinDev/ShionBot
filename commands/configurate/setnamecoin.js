module.exports.run = async (client, message, args) => {

    const db = require('quick.db')
    const Discord = require('discord.js')
    
    let namecoin = args.join(" ")
    let coin = await db.set(`coin_${message.guild.id}`, namecoin)
    message.channel.send(`**${namecoin}** foi setado como o nome da sua moeda!`)





}