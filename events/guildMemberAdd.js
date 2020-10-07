module.exports = (client, member) => {

let Discord = require('discord.js')
let db = client.database.ref(`Servidores/S${member.guild.id}/painel/configuração/canais`);

db.once("value").then(async function(snap) {
  
    if(snap.val() == null) {
  
    return;
    } else {

    let chatID = snap.val().entrada
    let chat = member.guild.channels.cache.get(chatID)
    if(!chat) return;
  
    let embed = new Discord.MessageEmbed()
    .setColor(`${client.config.cor}`)
    .author(`Novo Membro!!`, `${member.user.avatarURL({ dynamic: true, format: 'png', size: 2048 })}`)
    .setThumbnail(`${member.avatarURL({ dynamic: true, format: 'png', size: 2048 })}`)
    .setDescription(``)
    .setImage(``)
    .setTimestamp()
    .setFooter(`Shion Bot ${client.config.v} by TeamShion`, ``)
        
    chat.send(embed)

    }
})
 
let db2 = client.database.ref(`Servidores/S${member.guild.id}/painel/configuração/autorole`)

db2.once("value").then(async function(snap) {
  
  if(snap.val() == null) {

  return;
  } else {
    let autorole = snap.val().autorole
setTimeout(function () {

    let tag = member.guild.roles.cache.get(autorole)
    if(!tag) return;
    if(member.roles.cache.has(tag.id)) return;
    member.roles.add(tag)
  
  }, parseInt(1000));
}
})
}