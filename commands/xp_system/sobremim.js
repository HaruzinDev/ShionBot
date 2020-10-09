module.exports.run = (client, message, args) => {
  
  let sobremim2 = args.slice(0).join(" ")

  let db = client.databasePerfis.ref(`painel/perfis/M${message.author.id}`);

  db.once("value").then(async function(snap) {

  if(snap.val() == null) {
 
    message.channel.send(`seu perfil não foi criado use \`${client.config.prefix}criarperfil\` para criar um perfil.`)

  } else {

    db.update({

      sobremim: sobremim2

    })
    
    message.channel.send('Seu "Sobre Mim" foi setado <:miyanoFeliz:735307767673258015>')
  }
 })
}