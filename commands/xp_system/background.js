let sobremimP = "Use sy!sobremim <descrição> para colocar uma mensagem aqui"

module.exports.run = (client, message) => {

    let vezes = 0
    message.channel.send('Envie a imagem agora (tem até 60 segundos para enviar).')

    const filter = m => m.attachments && m.author.id === message.author.id;
    const collector = message.channel.createMessageCollector(filter, { time: 60000 });

collector.on('collect', m => {

  if (m.attachments) {
  var Attachment = (m.attachments).array();
  if(!Attachment[0]) return;
  if(vezes === 1) return;

  let final = Attachment[0].url.endsWith(".png") || Attachment[0].url.endsWith(".jpg")

  if(!final) return message.channel.send('Seu arquivo tem que ser em png ou jpg')
  let link1 = Attachment[0].url;
  const imgurUploader = require('imgur-uploader');
 
  imgurUploader(link1, {title: 'BackGround Shion!'}).then(data => {
        
  let image = data.link;
  let db = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/perfis/M${message.author.id}`);

  db.once("value").then(async function(snap) {

  if(snap.val() == null) {

    db.set({

      id: message.author.id,
      xp: 0,
      level: 1,
      bgI: image,
      sobremim: sobremimP,
      cookie: 0

    });
  } else {

    db.update({

      bgI: image

    })
  }
 })
    
    message.channel.send('Seu background foi setado <:miyanoFeliz:735307767673258015>')
    vezes++;
});

    }
});
}