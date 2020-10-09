module.exports = async (client, message) => {
  const moment = require('moment')
  moment.locale('pt-BR')

  const db = require('quick.db')
  let canaldb = await db.fetch(`logmsg_${message.guild.id}`)

 let canal = client.guilds.cache.get(message.guild.id).channels.cache.get(canaldb)
 if(!canal) return;
 //boa

  try {
  
  const Discord = require('discord.js')
  const deleted = message.createdAt

  let deletadoTimestamp = Math.floor(deleted.getTime()/1000.0);

  let deletado = deletadoTimestamp  + "270"

  if(message.content === null) return;

  const embed = new Discord.MessageEmbed()
  .setTitle("Mensagem deletada!")
  .addField(`Mensagem deletada em`, message.channel)
  .addField("Conteúdo da mensagem", message.content)
  .addField("Autor da mensagem", message.author)
  .addField("Horário", `${moment(deletado - 10800000).format('lll')}`)
  .setColor(`${client.config.cor}`)
  canal.send(embed)
    } catch (e) {

    }
  }
