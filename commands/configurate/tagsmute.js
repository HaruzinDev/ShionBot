module.exports.run = (client, message, args) => {
	if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Você não pode usar esse comando.')

	const Discord = require('discord.js')

	let tag3 = message.guild.roles.cache.get(args[2])
	let tag1 = message.guild.roles.cache.get(args[0])
	let tag2 = message.guild.roles.cache.get(args[1])

	if(!tag1) return message.channel.send('Os id da tag de mute que vc colocou é invalido')
	if(!tag2) return message.channel.send('Os id tag de adv1 que vc colocou é invalido')
	if(!tag3) return message.channel.send('Os id tag de adv2 que vc colocou é invalido')


  let botA = client.user.displayAvatarURL();
  let embed = new Discord.MessageEmbed()
  .setColor(client.config.cor)
  .setAuthor('Tags para o sistema de mute', `${botA}`)
  .setDescription(`Mute: ${tag1}\n\nAdvertência 1: ${tag2}\n\nAdvertência 2: ${tag3}\n\n`)
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
    const db = client.database.ref(`Servidores/S${message.guild.id}/painel/configuração/tagsmute`);
    
    db.once("value").then(async function(snap) {
    if(snap.val() == null) {
    	db.set({

    		mutetag: tag1.id,
    		adv1tag: tag2.id,
    		adv2tag: tag3.id
    	})
   	message.channel.send('Configuração aceita. Agora tudo funciona certinho <:miyanoFeliz:735307767673258015>')
  	msg.delete()
    } else {
    	db.update({

    		mutetag: tag1.id,
    		adv1tag: tag2.id,
    		adv2tag: tag3.id
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