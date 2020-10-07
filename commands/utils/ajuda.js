module.exports.run = async (client, message, args) => {

  const cmdD = require('../../data/json/cmds.json')
  const Discord = require('discord.js');
  const botA = client.user.displayAvatarURL();

  let modulo = args[0]

  if(modulo === "adm") {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Você não pode usar esse comando.')


  let pages = [`${cmdD.adm1}`, `${cmdD.adm2}`, `${cmdD.adm3}`]; 
  let page = 1; 
  

  let embed = new Discord.MessageEmbed()
  .setColor(client.config.cor)
  .setAuthor(`Denki-chan (EletroClub Bot). ${client.config.v}`, `${botA}`)
  .setDescription(pages[page-1])
  .setThumbnail(`${client.config.infoimg}`)
  .setTimestamp()
  .setFooter(`Pagina ${page} de ${pages.length}`, `${botA}`)
  
  
  message.channel.send(embed).then(msg => {

  msg.react('⬅️').then( r => {
  msg.react('➡️')
  
  // Filters
  const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅️' && user.id !== client.user.id;
  const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡️' && user.id !== client.user.id;

  const backwards = msg.createReactionCollector(backwardsFilter, {timer: 6000});
  const forwards = msg.createReactionCollector(forwardsFilter, {timer: 6000});

  backwards.on('collect', r => {

  if (page === 1) return;
  page--;

  embed.setDescription(pages[page-1]);
  embed.setTimestamp();
  embed.setFooter(`Pagina ${page} de ${pages.length}`, `${botA}`);
  msg.edit(embed)

  })
  
  forwards.on('collect', r => {

  if (page === pages.length) return;
  page++;

  embed.setDescription(pages[page-1]);
  embed.setTimestamp();
  embed.setFooter(`Pagina ${page} de ${pages.length}`, `${botA}`);
  msg.edit(embed)

  })
  })
  })
}

  if(modulo === "staff"){
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Você não pode usar esse comando.')

    let embed = new Discord.MessageEmbed()
    .setColor(client.config.cor)
    .setAuthor(`Denki-chan (EletroClub Bot). ${client.config.v}`, `${botA}`)
    .setDescription(`${cmdD.mod}`)
    .setThumbnail(`${client.config.infoimg}`)
    .setTimestamp()
    .setFooter(`Pagina exclusiva pra Staff`, `${botA}`)


     message.author.send(embed).then(msg => {

          message.reply('Foi enviado todos os comandos na sua dm');

     }).catch(err => message.channel.send('Aviso! Sua dm está bloqueada, não consegui enviar a mensagem.'))
}

  if(!modulo) {

  let pages = [`${cmdD.comuns1}`, `${cmdD.comuns2}`]; 
  let page = 1; 
  

  let embed = new Discord.MessageEmbed()
  .setColor(client.config.cor)
  .setAuthor(`Denki-chan (EletroClub Bot). ${client.config.v}`, `${botA}`)
  .setDescription(pages[page-1])
  .setThumbnail(`${client.config.infoimg}`)
  .setTimestamp()
  .setFooter(`Pagina ${page} de ${pages.length}`, `${botA}`)
  
  
  message.author.send(embed).then(msg => {
  message.reply('Foi enviado todos os comandos na sua dm');

  msg.react('⬅️').then( r => {
  msg.react('➡️')
  
  // Filters
  const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅️' && user.id !== client.user.id;
  const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡️' && user.id !== client.user.id;

  const backwards = msg.createReactionCollector(backwardsFilter, {timer: 6000});
  const forwards = msg.createReactionCollector(forwardsFilter, {timer: 6000});

  backwards.on('collect', r => {

  if (page === 1) return;
  page--;

  embed.setDescription(pages[page-1]);
  embed.setTimestamp();
  embed.setFooter(`Pagina ${page} de ${pages.length}`, `${botA}`);
  msg.edit(embed)

  })
  
  forwards.on('collect', r => {

  if (page === pages.length) return;
  page++;

  embed.setDescription(pages[page-1]);
  embed.setTimestamp();
  embed.setFooter(`Pagina ${page} de ${pages.length}`, `${botA}`);
  msg.edit(embed)

  })
  })
  }).catch(err => message.channel.send('Aviso! Sua dm está bloqueada, não consegui enviar a mensagem.'))
}
}