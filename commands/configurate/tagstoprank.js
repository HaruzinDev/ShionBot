module.exports.run = (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Você não pode usar esse comando.')



	const Discord = require('discord.js')

  let tag1 = message.guild.roles.cache.get(args[0])
  let tag2 = message.guild.roles.cache.get(args[1])
	let tag3 = message.guild.roles.cache.get(args[2])

	if(!tag1) return message.channel.send('O 1° id é invalido ou a tag do id não existe')
	if(!tag2) return message.channel.send('O 2° id é invalido ou a tag do id não existe')
	if(!tag3) return message.channel.send('O 3° id é invalido ou a tag do id não existe')


  let botA = client.user.displayAvatarURL();
  let embed = new Discord.MessageEmbed()
  .setColor(client.config.cor)
  .setAuthor('Tags para o sistema niveis', `${botA}`)
  .setDescription(`Tag do top 1: ${tag1}\n\nTag do top 2: ${tag2}\n\nTag do top 3: ${tag3}\n\n`)
  .setThumbnail('https://i.imgur.com/Q7FHQRt.png')
  .setTimestamp()
  .setFooter(`Tem 20 segundos para aceitar ou recusar`, `${botA}`)

  message.channel.send(embed).then(msg => {
  
  msg.react('✅').then( r => {
  msg.react('❌')
  
  // Filters
  const aceitaFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
  const recusaFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
  
  const aceita = msg.createReactionCollector(aceitaFilter, {timer: 20000});
  const recusa = msg.createReactionCollector(recusaFilter, {timer: 20000});
  
  aceita.on('collect', r => {
    const db = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/tagstoprank/`);
    
    db.once("value").then(async function(snap) {
    if(snap.val() == null) {
    	db.set({

    		tag1lvl: tag1.id,
    		tag2lvl: tag2.id,
    		tag3lvl: tag3.id
    	})
   	message.channel.send('Configuração aceita. Agora tudo funciona certinho <:miyanoFeliz:735307767673258015>')
  	msg.delete()
    } else {
    	db.update({

    		tagtop1: tag1.id,
    		tagtop2: tag2.id,
    		tagtop3: tag3.id
    	})
    message.channel.send('Configuração aceita. Agora tudo funciona certinho <:miyanoFeliz:735307767673258015>')
  	msg.delete()
    }

  })
  
  recusa.on('collect', r => {

  	message.channel.send('Configuração recusada. Faça novamente o comando se quiser continuar')
  	msg.delete()
  })

  })
  })
 })
}