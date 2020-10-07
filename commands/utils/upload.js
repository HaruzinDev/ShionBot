module.exports.run = (client, message) => {


if(!message.author.id === "638157424099852288") return message.channel.send('Eita... Sabia que voc� acabou de achar um comando escondido?\n� uma pena voc� n�o poder usa-lo.')

let vezes = 0
message.channel.send('Envie a imagem agora (tem até 60 segundos para enviar).')

const filter = m => m.attachments && m.author.id === message.author.id;
const collector = message.channel.createMessageCollector(filter, { time: 60000 });

collector.on('collect', m => {

  if (m.attachments) {
  var Attachment = (m.attachments).array();
  if(!Attachment[0]) return;
  if(vezes === 1) return;

  let final = Attachment[0].url.endsWith(".png") || Attachment[0].url.endsWith(".jpg") || Attachment[0].url.endsWith(".gif")

  if(!final) return message.channel.send('Seu arquivo tem que ser em png, jpg ou gif')
  let link1 = Attachment[0].url;
  const imgurUploader = require('imgur-uploader');
 
  imgurUploader(link1, {title: 'Upload by ShionBot!'}).then(data => {
        
  let image = data.link;
  message.channel.send(`Link gerado com sucesso: ${image}`)
  })
  }
});

collector.on('end', collected => {
    if(vezes === 0) {
        message.channel.send('Tempo de envio esgotado...')
    }
});
}