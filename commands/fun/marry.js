let padrãoI = "https://i.imgur.com/in947uB.png"
let sobremimP = "Use sy!sobremim <descrição> para colocar uma mensagem aqui"

module.exports.run = (client, message, args) => {

  let membro = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))

  if(!membro) return message.channel.send('Você não mencionou a pessoa que quer casar')

  if(membro.id === message.author.id) return message.channel.send('Você não pode casar com ess... PERA AI como assim você quer casar consigo mesmo?')

  if(membro.id === "763206138421968947") return message.channel.send('Você não pode se casar comigo! Quem sabe outro dia tá?')

  let db = client.databasePerfis.ref(`painel/perfis/M${message.author.id}`);
  
  let db2 = client.databasePerfis.ref(`painel/perfis/M${membro.id}`);

  db.once("value").then(async function(snap) {
  
  if(snap.val() == null) {
    db.set({

      id: message.author.id,
      bgI: padrãoI,
      sobremim: sobremimP,
      cookie: 0

      })
      return message.channel.send('Seu perfil foi criado, Tenta novamente.')    
  }

  let casado1 = snap.val().marry;

  if(casado1 == null) {

  db2.once("value").then(async function(snap) {

    if(snap.val() == null) {

      db2.update({
      id: membro.id,
      bgI: padrãoI,
      sobremim: sobremimP,
      cookie: 0

      })
      return message.channel.send('O perfil dessa pessoa foi criado foi criado, Tenta novamente.')
    }
    
    let casado2 = snap.val().marry;

    if(casado2 == null) {

        const Discord = require('discord.js')
        let botA = client.user.displayAvatarURL();

        let embed = new Discord.MessageEmbed()
        .setAuthor(`Pedido de casamento`)
        .setDescription(`${membro}, aceita casar com ${message.author}?`)
        .setTimestamp()
        .setFooter('Você tem 30 segundos para responder', `${botA}`)

        message.channel.send(`${membro}`).then(msg => msg.delete())
        message.channel.send(embed).then(msg => {
      
        msg.react('💍').then( r => {
        msg.react('🙅‍♀️')
        

        const aceitaFilter = (reaction, user) => reaction.emoji.name === '💍' && user.id === membro.id;
        const recusaFilter = (reaction, user) => reaction.emoji.name === '🙅‍♀️' && user.id === membro.id;
      
        const aceita = msg.createReactionCollector(aceitaFilter, {max: 1, timer: 30000});
        const recusa = msg.createReactionCollector(recusaFilter, {max: 1, timer: 30000});

        aceita.on('collect', r => {

          db.update({

            marry: membro.id

          })

          db2.update({

            marry: message.author.id

          })
          
          message.channel.send(`Agora ${message.author} e ${membro} estão casados <:miyanoFeliz:735307767673258015>`) 
        })
          
        recusa.on('collect', r => {

          message.channel.send(`${message.author}, Seu pedido de casamento foi recusado`)

          })

      setTimeout(function () {
        msg.delete()
      }, parseInt(30000))
        })
      })
    } else {

      message.channel.send('Ouvi dizer que vc é um comedor de casadas... Será mesmo que devo lhe casar com essa adorável pessoa?')
    }

  })

  } else {

    message.channel.send('Você não pode ter um harem de casadas.')
  }

})
  
}