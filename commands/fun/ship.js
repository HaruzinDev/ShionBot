const imgjimp = require('../../tools/imgjimp')

module.exports.run = async (client, message, args) => {


    let aut = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    if(!aut) return message.channel.send('Opa, esqueceu de mencionar algu´me não?')


    let menção = message.guild.member(message.mentions.users.last() || message.guild.members.cache.get(args[1]))
    if(!menção) return message.channel.send('Opa, esqueceu de mencionar alguém não?')


    let autAvatar = aut.user.avatarURL({ dynamic: true, format: 'png', size: 128 })

    let mençãoAvatar = menção.user.avatarURL({ dynamic: true, format: 'png', size: 128 })
    
    imgjimp.ship(client, message, aut , menção, autAvatar, mençãoAvatar )

}