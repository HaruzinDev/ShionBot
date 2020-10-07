let padrãoI = "https://i.imgur.com/in947uB.png"
let sobremimP = "Use sy!sobremim <descrição> para colocar uma mensagem aqui"
const usoRecente = new Set();

module.exports.run = (client, message, args) => {
  if (usoRecente.has(message.author.id)) {

    message.channel.send(`Opa ${message.author}. Espere 15 minutos antes de usar esse comando novamente.`);
} else {

  let membro = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))

  if(!membro) return message.channel.send('Você não mencionou a pessoa.')

  if(membro.id === message.author.id) return message.channel.send('Você não pode dar cookie a si mesmo.')
  
  let db = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/perfis/M${membro.id}`);

  db.once("value").then(async function(snap) {

    if(snap.val() == null){

      db.set({

        id: message.author.id,
        xp: 0,
        level: 1,
        bgI: padrãoI,
        sobremim: sobremimP,
        cookie: 1

      })
      message.channel.send(`Você deu um cookie de agradecimento ao ${membro} <:miyanoFeliz:735307767673258015>`)
    } else {

      let numero = snap.val().cookie + 1;

      db.update({

        cookie: numero

      })
      message.channel.send(`Você deu um cookie de agradecimento ao ${membro} <:miyanoFeliz:735307767673258015>`)
    }
  })
  usoRecente.add(message.author.id);
  setTimeout(() => {
  usoRecente.delete(message.author.id);
  }, 60000 * 15);
}
}