const erros = require('../tools/erros.js');
const checkChannelsXP = require('../data/database/sistemCheckChannels.js')

module.exports = (client, message) => {


  if(message.author.bot) return;
  if(message.channel.type === "dm") return message.author.send('Olá pessoa. Infelizmente eu não respondo DM. Use algum comando apenas em servidor oq?')

  let db = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/actived`)

  db.once("value").then(async function(snap) {

    if(snap.val() == null){
    db.set({
      actived: "desativado"
    })
    } else {
    let actived = snap.val().actived
    if(actived === "ativado") {
      checkChannelsXP.sistemCheckChannels(client, message)
    }
    }
  })

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmdadministrator = client.administrator.get(command);
  const cmdconfigurate = client.configurate.get(command);
  const cmdinfo = client.info.get(command);
  const cmdeconomy_system = client.economy_system.get(command);
  const cmdfun = client.fun.get(command);
  const cmdmoderation = client.moderation.get(command);
  const cmdutils = client.utils.get(command);
  const cmdxp_system = client.xp_system.get(command);
  
  if (message.content.indexOf(client.config.prefix) !== 0) return;


  if(cmdconfigurate){

    cmdconfigurate.run(client, message, args)

  }else if(cmdeconomy_system){//qual o comando que você tá fazendo?

    cmdeconomy_system.run(client, message, args)
  
  } else if(cmdutils){

    cmdutils.run(client, message, args);

  } else if(cmdfun){

    cmdfun.run(client, message, args);

  } else if(cmdmoderation){

    cmdmoderation.run(client, message, args);

  } else if(cmdxp_system){

    cmdxp_system.run(client, message, args);

  } else if(cmdadministrator){

    cmdadministrator.run(client, message, args)

  } else if(cmdinfo){
    
    cmdinfo.run(client, message, args)

  } else {
    
    return erros.naoAchei(client, message)
  }
};