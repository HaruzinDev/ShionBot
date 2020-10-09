module.exports.run = (client, message, args) => {
  let membro = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))

  if(!membro) return message.channel.send('Você não mencionou a pessoa que quer divorciar')

  if(membro.id === message.author.id) return message.channel.send('Como assim cara você mesmo não se aguenta mais?')

  let db = client.databasePerfis.ref(`painel/perfis/M${message.author.id}`);
  
  let db2 = client.databasePerfis.ref(`painel/perfis/M${membro.id}`);

  db.once("value").then(async function(snap) {
  
  if(snap.val() == null) {

  db2.once("value").then(async function(snap) {

    if(snap.val() == null) {

      message.channel.send('Essa pessoa não é casada com ninguém. Na verdade você também não é casado com ninguém.')
    } else {

      let casado = snap.val().marry;
      if(casado !== message.author.id) return message.channel.send('Você não é casado(a) com essa pessoa. Na verdade você não é casado com ninguém.')
      db2.update({

        marry: null

      })
      
    message.channel.send('Você divorciou dessa pessoa.')
    }
  })
  } else {
    let casado1 = snap.val().marry;

  db2.once("value").then(async function(snap) {

    let casado2 = snap.val().marry;

    if(casado1 !== membro.id) return message.channel.send('Você não é casado(a) com essa pessoa.')

    if(casado2 !== message.author.id) return message.channel.send('Essa pessoa não é casado(a) com você.')

    db.update({

      marry: null

    })

    db2.update({

      marry: null

    })
    message.channel.send('Você divorciou dessa pessoa.')
  })
  }
})
}