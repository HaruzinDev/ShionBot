module.exports.run = (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Você não pode usar esse comando.')

  let msgup = args.slice().join(' ');
  if(!msgup) return message.channel.send('Você tem que por uma mensagem.')

  let msg = message.channel.send(`Mensagem: \`${msgup}\` foi setado como mensagem de Uplvl.`)

  let db = client.database.ref(`Servidores/S${message.guild.id}/painel/configuração/msgs`);

    db.once("value").then(async function(snap) {

    if(snap.val() == null) {

      db.set({

        UpMsg: msgup

      });

      msg

    } else {

      db.update({

        UpMsg: msgup

      })

      msg

    }
  })
}