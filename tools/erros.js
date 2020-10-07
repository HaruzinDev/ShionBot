
const Discord = require('discord.js')

//erro do comando em desevolvimento

module.exports.cmdDev = (client, message) => {

  const botA = client.user.displayAvatarURL();


  const embed = new Discord.MessageEmbed()
  .setColor(client.config.cor)
  .setAuthor('Development', `${botA}`)
  .setDescription(`Este comando está em manutenção.\nUse ${client.config.prefix} para ver os comandos desponiveis.`)
  .setThumbnail(`${client.config.devimg}`)
  .setTimestamp()
  .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)
  message.channel.send(embed)
}

//erro de não achar o comando:

module.exports.naoAchei = (client, message) => {
  
  const botA = client.user.displayAvatarURL();


  const embed = new Discord.MessageEmbed()
  .setColor(client.config.cor)
  .setAuthor('Error', `${botA}`)
  .setDescription(`Comando inexitente ou errado.\nUse ${client.config.prefix} para ver os comandos desponiveis.`)
  .setThumbnail(`${client.config.erroimg}`)
  .setTimestamp()
  .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)

  message.channel.send(embed)
}

//erro de maneira errada de escrever o comando:

module.exports.cmdErr = (client, message, maneiraC) => {

  const botA = client.user.displayAvatarURL();


  const embed = new Discord.MessageEmbed()
  .setColor(client.config.cor)
  .setAuthor('Type Error', `${botA}`)
  .setDescription(`O comando deve ser escrito dessa forma: \`${maneiraC}\``)
  .setThumbnail(`${client.config.erroimg}`)
  .setTimestamp()
  .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)
  
  message.channel.send(embed)
}