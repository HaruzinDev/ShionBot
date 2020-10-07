module.exports.run = (client, message) => {

  const Discord = require('discord.js')

  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Seus amiguinhos não gostaria de perdeu o xp agora. Deixe isso com os ADM ok?')

  let db = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/perfis`);


  let botA = client.user.displayAvatarURL();
  let embed = new Discord.MessageEmbed()
  .setColor(client.config.cor)
  .setAuthor('Resetar Rank', `${botA}`)
  .setDescription(`Isso vai resetar todos os perfis do servidor deseja mesmo fazer isso?`)
  .setThumbnail('https://i.imgur.com/Q7FHQRt.png')
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
    db.once("value").then(async function(snap) {

      if(snap.val() == null){

        return message.channel.send('não há dados para resetar')
      } else {

  Promise.all([db.once('value')]).then(function(resp) {

      const toprank = resp[0].val();
        

        var objetosRank = []

        var keys = Object.keys(toprank)
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];

        objetosRank.push(toprank[k])

        }
        var byXP = objetosRank.slice(0);
            byXP.sort(function(a,b) {
            return b.xp - a.xp;
        });

        var ids = []
        for (var i = 0; i < byXP.length; i++) {
          var ids = byXP[i].id;

        let db2 = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/perfis/M${ids}`);
          db2.update({

          level: 1,
          xp: 0

        })
      }
      message.channel.send('Rank resetado com sucesso. <:miyanoFeliz:735307767673258015>')
  	  msg.delete()
    })        
    }
  })
  })
  
  recusa.on('collect', r => {

  	message.channel.send('Ufa... Já imaginou se resetasse agora? Galerinhas ia ficar irritada')
  	msg.delete()
  })
  })
  })
}