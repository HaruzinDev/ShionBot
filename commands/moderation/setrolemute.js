const Discord = require('discord.js')
let db = require('quick.db')

module.exports.run = (client, message, args) => {

    let cargo = message.guild.roles.cache.get(args[0]) || message.mentions.roles.first()
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Você não tem permissão para isso!")

    try {
    
    let role = await db.set(`rolemute_${message.guild.id}`, cargo.id)
    let rolename = await db.set(`rolename_${message.guild.id}`, cargo.name)
    message.channel.send(`O cargo **${cargo}** foi setado como cargo de mute!`)

        } catch(e) {

        }
    }