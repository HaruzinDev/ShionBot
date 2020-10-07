exports.run = (client, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Ué? Só vou desmutar se você tiver perm.");

    let mutee = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    if(!mutee) return message.channel.send("Mencione o usuario que queira desmutar...");

    const db = client.database.ref(`Servidores/S${message.guild.id}/painel/configuração/tagsmute`);
    
    db.once("value").then(async function(snap) {

    if(snap.val() == null) {

        return message.channel.send('As tags de Advertência 1/2 e Mute não foram configuradas')
    } else {

    let mutid = snap.val().mutetag

    let MuteRole = message.guild.roles.cache.get(mutid);
    if(!MuteRole) return message.channel.send(`A tag de Mute não existe mais`);

    if(!mutee.roles.cache.has(MuteRole.id)) return message.channel.send(`Esse membro não está mutado.`)
    
    mutee.roles.remove(MuteRole);
    message.channel.send(`<@${mutee.id}> foi desmutado`);

    const Discord = require('discord.js')
    const botA = client.user.displayAvatarURL();

    const embed = new Discord.MessageEmbed()
    .setColor(client.config.cor)
    .setAuthor('Cartinha:', `${botA}`)
    .setDescription(`Você foi desmutado! Se você aprontar de novo vou mandar cartinha pra você novamente >:c`)
    .setThumbnail('https://i.imgur.com/B3vFy68.png')
    .setTimestamp()
    .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)

    mutee.send(embed).catch(err => {
        
        message.channel.send('Aviso! A dm do mutado está bloqueada, não consegui enviar a cartinha.\n(Ele mesmo assim foi desmutado).')
    })
   }
 })
}