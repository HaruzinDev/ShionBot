module.exports.run = (client, message, args) => {//aqui agora
	if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Você não pode usar esse comando.')



	const Discord = require('discord.js')

  let tag1 = message.guild.roles.cache.get(args[0])
  let tag2 = message.guild.roles.cache.get(args[1])
	let tag3 = message.guild.roles.cache.get(args[2])
  let tag4 = message.guild.roles.cache.get(args[3])
  let tag5 = message.guild.roles.cache.get(args[4])

	if(!tag1) return message.channel.send('O 1° id é invalido ou a tag do id não existe')
	if(!tag2) return message.channel.send('O 2° id é invalido ou a tag do id não existe')
	if(!tag3) return message.channel.send('O 3° id é invalido ou a tag do id não existe')
  if(!tag4) return message.channel.send('O 4° id é invalido ou a tag do id não existe')
  if(!tag5) return message.channel.send('O 5° id é invalido ou a tag do id não existe')


  let botA = client.user.displayAvatarURL();
  let embed = new Discord.MessageEmbed()
  .setColor(client.config.cor)
  .setAuthor('Tags para o sistema niveis', `${botA}`)
  .setDescription(`Tag do nivel 10: ${tag1}\n\nTag do nivel 20: ${tag2}\n\nTag do nivel 30: ${tag3}\n\nTag do nivel 45: ${tag4}\n\nTag do nivel: 50 ${tag5}\n\n`)
  .setThumbnail(`${client.config.devimg}`)
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
    const db = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/tagslevel/`);
    
    db.once("value").then(async function(snap) {
    if(snap.val() == null) {
    	db.set({

    		tag1lvl: tag1.id,
    		tag2lvl: tag2.id,
    		tag3lvl: tag3.id,
        tag4lvl: tag4.id,
        tag5lvl: tag5.id
    	})
   	message.channel.send('Configuração aceita. Agora tudo funciona certinho <:miyanoFeliz:735307767673258015>')
  	msg.delete()
    } else {
    	db.update({

    		tag1lvl: tag1.id,
    		tag2lvl: tag2.id,
    		tag3lvl: tag3.id,
        tag4lvl: tag4.id,
        tag5lvl: tag5.id
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