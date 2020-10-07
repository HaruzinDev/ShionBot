module.exports.run = (client, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('É oq? vou fazer isso pra você não.')
    
    const Discord = require('discord.js')    
    
    
    let idDosCanais = args.slice(0).join(" ")
    if(!idDosCanais) return message.channel.send('Hmmm... Acho que você não enviou id de algum canal.')
    
    let idDosCanaisSeparada = idDosCanais.split(" ")
    
    let canais = []
    
    let listaDeCanaisParaEmbed = [""]
    
    for (let i = 0; i < idDosCanaisSeparada.length; i++) {
        const idDoCanal = idDosCanaisSeparada[i];
        
        let canal = message.guild.channels.cache.get(idDoCanal)
        if(canal.type === "text") {
            canais.push(canal)
            let canalParaEmbed = listaDeCanaisParaEmbed[0] + `Canal - ${canal} ∬ ID: C${i + 1}\n\n`
            listaDeCanaisParaEmbed.shift()
            listaDeCanaisParaEmbed.push(canalParaEmbed)
        }
    }
    if(!canais[0]) return message.channel.send('Opa algo de errado não está certo. Você não enviou um ID de canal valido.')
    
    
    let botA = client.user.displayAvatarURL();
      let embed = new Discord.MessageEmbed()
      .setColor(client.config.cor)
      .setAuthor('Canais que aceitaram a contagem de XP:', `${botA}`)
      .setDescription(`${listaDeCanaisParaEmbed}`)
      .setThumbnail(`${client.config.devimg}`)
      .setTimestamp()
      .setFooter(`Tem 20 segundos para aceitar ou recusar`, `${botA}`)
    
      message.channel.send(embed).then(msg => {
      
      msg.react('✅').then( r => {
      msg.react('❌')
      
      // Filters
      const aceitaFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
      const recusaFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
      
      const aceita = msg.createReactionCollector(aceitaFilter, {timer: 20000});
      const recusa = msg.createReactionCollector(recusaFilter, {timer: 20000});
      
      aceita.on('collect', r => {
    
        for (let i = 0; i < canais.length; i++) {
    
            let canalID = canais[i].id
    
        const db = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/canais/C${i + 1}`);
        
        db.once("value").then(async function(snap) {
            if(snap.val() == null) {
                db.set({
        
                    id: canalID
        
                })
            } else {
                db.update({
        
                    id: canalID
        
                })
            }
        })
        }
        message.channel.send('Configuração aceita. Agora tudo funciona certinho <:miyanoFeliz:735307767673258015>')
        msg.delete()
      })
      
      recusa.on('collect', r => {
    
          message.channel.send('Configuração recusada. Faça novamente o comando se quiser continuar')
          msg.delete()
      })
    
      })
      })
    }