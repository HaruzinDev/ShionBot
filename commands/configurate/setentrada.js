let nada = "nada"

module.exports.run = (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Você não pode usar esse comando.')

    let canal = args[0]
    if(!canal) return message.channel.send('Você tem que por id de um canal')
  
    let canalsearch = message.mentions.channels.first() || message.guild.channels.cache.get(`${canal}`)
    if(!canalsearch) return message.channel.send('Esse canal não existe ou você não colocou o **id** corretamente')
  
    if(canalsearch.type !== "text") return message.channel.send('O canal tem que ser de texto')
  
    let msg = message.channel.send(`Canal: ${canalsearch} setado como canal de entrada do servidor.`)
  
    let db = client.database.ref(`Servidores/S${message.guild.id}/painel/configuração/canais`);

      db.once("value").then(async function(snap) {

      if(snap.val() == null) {

        db.set({

          entrada: canalsearch.id,
          banimento: nada,
          clvl: nada

        });
  
        msg
  
      } else {

        db.update({

          entrada: canalsearch.id

        })
  
      msg
  
    }
  })
}