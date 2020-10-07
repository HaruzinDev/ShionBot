module.exports.run = (client, message, args) => {
  
  let sobremim2 = args.slice(0).join(" ")
  let padrãoI = "https://i.imgur.com/in947uB.png"

  let db = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/perfis/M${message.author.id}`);

  db.once("value").then(async function(snap) {

  if(snap.val() == null) {

    db.set({

      id: message.author.id,
      xp: 0,
      level: 1,
      bgI: padrãoI,
      sobremim: sobremim2,
      cookie: 0

    });

    message.channel.send('Seu "Sobre Mim" foi setado <:miyanoFeliz:735307767673258015>')
  } else {

    db.update({

      sobremim: sobremim2

    })
    
    message.channel.send('Seu "Sobre Mim" foi setado <:miyanoFeliz:735307767673258015>')
  }
 })
}