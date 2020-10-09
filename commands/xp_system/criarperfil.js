let padrãoI = "https://i.imgur.com/in947uB.png"
let sobremimP = "Use sy!sobremim <descrição> para colocar uma mensagem aqui"

module.exports.run = (client, message, args) => {

    let idm = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author);
    let idu = idm.user;
    let db = client.databasePerfis.ref(`painel/perfis/M${idu.id}`);
    let db2 = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/perfis/M${idu.id}`)

    db2.once("value").then(async function(snap) {

        if(snap.val() == null) {
          db2.set({
            xp: 0,
            level: 1,
          })
        }
    })
      db.once("value").then(async function(snap) {
    
        if(snap.val() == null) {
    
        db.set({
    
          id: idu.id,
          bgI: padrãoI,
          sobremim: sobremimP,
          cookie: 0
    
        });
        message.channel.send('Seu perfil foi criado. Use novamente para ver seu perfil.')
    }
})
}