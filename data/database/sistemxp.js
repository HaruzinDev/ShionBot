const sistemlvl = require('./sistemlvl.js')

//sistema de xp

module.exports.sistemxp = async (client, message) => {

  global.id = '',
  global.xp = '',
  global.nextLevel = ''

  let pointsAdd = Math.floor(Math.random() * 3) + 4;

  let db = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/perfis/M${message.author.id}`);
  
  
  db.once("value").then(async function(snap) {

      if(snap.val() == null) {

        return;
  } else {

    xp = snap.val(). xp + pointsAdd;
    nextLevel = snap.val().level * 1000;

    db.update({

      xp: xp

    })
                  
  if(nextLevel <= xp) {

    nextLevel = snap.val().level + 1;

    db.update({

      level: nextLevel

    })


  let nivel = nextLevel - 1;
  const autID = message.author.id;
  const membro = message.guild.member(message.guild.members.cache.get(`${autID}`))

  sistemlvl.sistemlvl(client, message, nivel, membro)
     }           
    }
  })
}