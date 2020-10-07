module.exports.run = (client, message) => {
  const Discord = require('discord.js')

        let mensagem = [""]
        let pag2 = [""]
        let pag3 = [""]
        let pag4 = [""]
        let pag5 = [""]



  let leaderboardDB = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/perfis`).orderByChild('xp')

    Promise.all([leaderboardDB.once('value')]).then(function(resp) {
        const toprank = resp[0].val();

        if(toprank == null) return message.channel.send('Tem certeza que esse servidor está com o sistema de xp ativo?')
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
        


        for (var i = 0; i < byXP.length; i++) {

            if(i > 9) {
              
              if(i < 20){
                var id = byXP[i].id;
                let idm = message.guild.member(message.guild.members.cache.get(id))
                var xp = byXP[i].xp;
                let teste = pag2[0] + `${i + 1}° ${idm} ∬ XP: ${xp}\n\n`
                pag2.shift()
                pag2.push(teste)
              }

            if(i > 19) {
              if(i < 30){
                var id = byXP[i].id;
                let idm = message.guild.member(message.guild.members.cache.get(id))
                var xp = byXP[i].xp;
                let teste = pag3[0] + `${i + 1}° ${idm} ∬ XP: ${xp}\n\n`
                pag3.shift()
                pag3.push(teste)
              }
            if(i > 29) {
              if(i < 40){
                var id = byXP[i].id;
                let idm = message.guild.member(message.guild.members.cache.get(id))
                var xp = byXP[i].xp;
                let teste = pag4[0] + `${i + 1}° ${idm} ∬ XP: ${xp}\n\n`
                pag4.shift()
                pag4.push(teste)
              }
            if(i > 39) {

              if(i < 50){
                var id = byXP[i].id;
                let idm = message.guild.member(message.guild.members.cache.get(id))
                var xp = byXP[i].xp;
                let teste = pag5[0] + `${i + 1}° ${idm} ∬ XP: ${xp}\n\n`
                pag5.shift()
                pag5.push(teste)
              }
            if(i > 50) {
              
                        }
                    }
                 }
                }
            }
        if(i < 10){
        var id = byXP[i].id;
        let idm = message.guild.member(message.guild.members.cache.get(id))
        var xp = byXP[i].xp;
        let teste = mensagem[0] + `${i + 1}° ${idm} ∬ XP: ${xp}\n\n`
        mensagem.shift()
        mensagem.push(teste)
        }
        }
        mensagem.push(pag2, pag3, pag4, pag5)

        const botA = client.user.displayAvatarURL();
  
        let page = 1; 
        
        let embed = new Discord.MessageEmbed()
        .setColor(client.config.cor)
        .setAuthor('Rank XP', `${botA}`)
        .setDescription(mensagem[page-1])
        .setThumbnail(`${message.guild.iconURL({ dynamic: true, format: 'png', size: 2048 })}`)
        .setTimestamp()
        .setFooter(`Pagina ${page} de ${mensagem.length}`, `${botA}`)
      
        message.channel.send(embed).then(msg => {
        
        msg.react('⬅️').then( r => {
        msg.react('➡️')
        
        // Filters
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅️' && user.id !== client.user.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡️' && user.id !== client.user.id;
        
        const backwards = msg.createReactionCollector(backwardsFilter, {timer: 60000});
        const forwards = msg.createReactionCollector(forwardsFilter, {timer: 60000});
        
        backwards.on('collect', r => {
      
        if (page === 1) return;
        page--;
        
        embed.setDescription(mensagem[page-1]);
        embed.setTimestamp();
        embed.setFooter(`Pagina ${page} de ${mensagem.length}`, `${botA}`);
        msg.edit(embed)
      
        })
        
        forwards.on('collect', r => {
      
        if (page === mensagem.length) return;
        page++;
      
        embed.setDescription(mensagem[page-1]);
        embed.setTimestamp();
        embed.setFooter(`Pagina ${page} de ${mensagem.length}`, `${botA}`);
        msg.edit(embed)
      
        })
      })
    })
  })
}