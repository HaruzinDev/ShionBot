const imgjimp = require('../../tools/imgjimp.js')

const usoRecente = new Set();

module.exports.run = (client, message, args) => {

    let idm = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author);
    let idu = idm.user;
    let db = client.databasePerfis.ref(`painel/perfis/M${idu.id}`);
    let db2 = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/perfis/M${idu.id}`)

  db2.once("value").then(async function(snap) {

    if(snap.val() == null) {
    message.channel.send(`seu perfil não foi criado nesse servidor, use \`${client.config.prefix}criarperfil\` para criar um perfil.`)
    } else {
    let xp = snap.val().xp;
    let level = snap.val().level - 1;
  db.once("value").then(async function(snap) {

    if(snap.val() == null) {

      message.channel.send(`seu perfil não foi criado, use \`${client.config.prefix}criarperfil\` para criar um perfil.`)

  } else {

  if (usoRecente.has(message.author.id)) {

    message.channel.send(`Opa ${message.author}. Espere 15 segundos antes de usar esse comando novamente.`);
} else {

    let bgI = snap.val().bgI
    let cookie = snap.val().cookie;
    let sobremim = snap.val().sobremim;
    let marry = snap.val().marry;
    if(marry == null) {

      message.channel.send('Carregando dados... Aguarde 5 segundos\n').then(msg =>{
        setTimeout(function () {                                 
             msg.delete()                                        
        }, parseInt(5000));                                      
      })                                                       
         console.log('chegou1')                                                        
    imgjimp.perfilI(client, message, idu, xp, level, bgI, cookie, sobremim)
    } else {                                                     
                                                                 
      message.channel.send('Carregando dados... Aguarde 5 segundos\n').then(msg =>{
        setTimeout(function () {
             msg.delete()
        }, parseInt(5000));
      })
    imgjimp.perfilIC(client, message, idu, xp, level, bgI, cookie, sobremim, marry)
    }

      usoRecente.add(message.author.id);
        setTimeout(() => {
        usoRecente.delete(message.author.id);
        }, 15000);
    }
    }
  })
}
})
}
