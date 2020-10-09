module.exports.run = async (client, message, args) => {
  const Discord = require('discord.js');
  const botA = client.user.displayAvatarURL();


const { paginasForEmbed } = require('../../tools/generatorEmbedHelp.js')


let pagina = 1

  let embed = new Discord.MessageEmbed()
  .setColor(client.config.cor)
  .setAuthor(`Shion Yorigami. ${client.config.v}`, `${botA}`)
	.setDescription(paginasForEmbed[pagina-1])
  .setThumbnail(client.user.displayAvatarURL({ dynamic:true }))
  .setImage(`${client.config.banner}`)
  .setTimestamp()
  .setFooter(`Pagina ${pagina} de ${paginasForEmbed.length}`, `${botA}`)

  message.channel.send(embed).then(msg => {


      msg.react('763422282269196320').then( r => {
      msg.react('763420394958094376')
      msg.react('763420347969961995')
      msg.react('763415435004608526')
      msg.react('763423633732534284')
      msg.react('763420290965307402')
      msg.react('763424759089987626')
      msg.react('763426072359862313')
      msg.react('🆙')
      
      // Filters
      const categoriasEmojiFilter = (reaction, user) => reaction.emoji.id === '763422282269196320' && user.id === message.author.id
      const adminEmojiFilter = (reaction, user) => reaction.emoji.id === '763420394958094376' && user.id === message.author.id
      const configEmojiFilter = (reaction, user) => reaction.emoji.id === '763420347969961995' && user.id === message.author.id;
      const moneyEmojiFilter = (reaction, user) => reaction.emoji.id === '763415435004608526' && user.id === message.author.id;
      const funEmojiFilter = (reaction, user) => reaction.emoji.id === '763423633732534284' && user.id === message.author.id;
      const infoEmojiFilter = (reaction, user) => reaction.emoji.id === '763420290965307402' && user.id === message.author.id;
      const modEmojiFilter = (reaction, user) => reaction.emoji.id === '763424759089987626' && user.id === message.author.id;
      const utilsEmojiFilter = (reaction, user) => reaction.emoji.id === '763426072359862313' && user.id === message.author.id;
      const upEmojiFilter = (reaction, user) => reaction.emoji.name === '🆙' && user.id === message.author.id;
    

      const categoriasEmoji = msg.createReactionCollector(categoriasEmojiFilter, {timer: 2000})
      const adminEmoji = msg.createReactionCollector(adminEmojiFilter, {timer: 2000})
      const configEmoji = msg.createReactionCollector(configEmojiFilter, {timer: 2000});
      const moneyEmoji = msg.createReactionCollector(moneyEmojiFilter, {timer: 2000});
      const funEmoji = msg.createReactionCollector(funEmojiFilter, {timer: 2000})
      const infoEmoji = msg.createReactionCollector(infoEmojiFilter, {timer: 2000});
      const modEmoji = msg.createReactionCollector(modEmojiFilter, {timer: 2000})
      const utilsEmoji = msg.createReactionCollector(utilsEmojiFilter, {timer: 2000})
      const upEmoji = msg.createReactionCollector(upEmojiFilter, {timer: 2000})  

      categoriasEmoji.on('collect', r => {
      if(pagina === 1) return;
      pagina = 1
    
      embed.setDescription(paginasForEmbed[pagina-1]);
      embed.setImage('https://i.imgur.com/jBAd3xM.gif')
      embed.setTimestamp();
      embed.setFooter(`Pagina ${pagina} de ${paginasForEmbed.length}`, `${botA}`);
      msg.edit(embed)
    
      })
        
      adminEmoji.on('collect', r => {
      if(pagina === 2) return;
       pagina = 2
    
      embed.setDescription(paginasForEmbed[pagina-1]);
      embed.setTimestamp();
      embed.setImage('')
      embed.setFooter(`Pagina ${pagina} de ${paginasForEmbed.length}`, `${botA}`);
      msg.edit(embed)
    
      })

      configEmoji.on('collect', r => {
      if(pagina === 3) return;
       pagina = 3
    
      embed.setDescription(paginasForEmbed[pagina-1]);
      embed.setTimestamp();
      embed.setImage('')
      embed.setFooter(`Pagina ${pagina} de ${paginasForEmbed.length}`, `${botA}`);
      msg.edit(embed)
    
      })

      moneyEmoji.on('collect', r => {
        if(pagina === 4) return;
        pagina = 4
     
       embed.setDescription(paginasForEmbed[pagina-1]);
       embed.setTimestamp();
       embed.setImage('')
       embed.setFooter(`Pagina ${pagina} de ${paginasForEmbed.length}`, `${botA}`);
       msg.edit(embed)
     
       })
      
       funEmoji.on('collect', r => {
        if(pagina === 5) return;
        pagina = 5
     
       embed.setDescription(paginasForEmbed[pagina-1]);
       embed.setTimestamp();
       embed.setImage('')
       embed.setFooter(`Pagina ${pagina} de ${paginasForEmbed.length}`, `${botA}`);
       msg.edit(embed)
     
       })
      infoEmoji.on('collect', r => {
        if(pagina === 6) return;
        pagina = 6
    
      embed.setDescription(paginasForEmbed[pagina-1]);
      embed.setTimestamp();
      embed.setImage('')
      embed.setFooter(`Pagina ${pagina} de ${paginasForEmbed.length}`, `${botA}`);
      msg.edit(embed)
    
      })
      
      modEmoji.on('collect', r => {
        if(pagina === 7) return;
        pagina = 7
    
      embed.setDescription(paginasForEmbed[pagina-1]);
      embed.setTimestamp();
      embed.setImage('')
      embed.setFooter(`Pagina ${pagina} de ${paginasForEmbed.length}`, `${botA}`);
      msg.edit(embed)
    
      })
      
      utilsEmoji.on('collect', r => {
        if(pagina === 8) return;
        pagina = 8
    
      embed.setDescription(paginasForEmbed[pagina-1]);
      embed.setTimestamp();
      embed.setImage('')
      embed.setFooter(`Pagina ${pagina} de ${paginasForEmbed.length}`, `${botA}`);
      msg.edit(embed)
    
      })
      upEmoji.on('collect', r => {
        if(pagina === 9) return;
       pagina = 9
    
      embed.setDescription(paginasForEmbed[pagina-1]);
      embed.setTimestamp();
      embed.setImage('')
      embed.setFooter(`Pagina ${pagina} de ${paginasForEmbed.length}`, `${botA}`);
      msg.edit(embed)
    
      })

      })
      })
    }