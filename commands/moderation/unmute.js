const Discord = require('discord.js')
let db = require('quick.db')

module.exports.run = (client, message, args) => {


        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Você não tem permissão para isso!")
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Eu não tenho permissão de GERENCIAR CARGOS")

        let cargotomute = await db.fetch(`rolemute_${message.guild.id}`)
        
        let membro = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))

        if(!membro.roles.cache.has(cargotomute)) return message.channel.send(`O usuário ${membro} não tem o cargo de mute`)
        if(!cargotomute) return message.channel.send("Você não me deu nenhum cargo de mute! Use sy!setrolemute para mudar o cargo de mute.")

        try {
            membro.roles.remove(cargotomute)
            message.channel.send(`Eu desmutei **${membro}**`)
        } catch (e) {
            message.channel.send(`Aconteceu um erro ao remover o cargo deste membro!`)
        }
    }
