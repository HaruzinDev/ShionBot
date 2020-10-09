module.exports.run = async (client, message) => {


    const Discord = require('discord.js');
    const discloud = require("discloud-status");


    const botA = client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 });

    const ms = await message.channel.send("** **").then(message => message.delete())
	const clientms = ms.createdTimestamp - message.createdTimestamp;

    let totalSeconds = client.uptime / 1000;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
  
    let uptime = `${hours.toFixed()} horas ${minutes.toFixed()} minutos`;

    let r = discloud.ram();


   const embed = new Discord.MessageEmbed()
   .setColor(client.config.cor)
   .setAuthor('Shion Yorigami.', `${botA}`)
   .setDescription('Todas as informações do bot')
   .setThumbnail(`${botA}`)
   .addFields(
       {name: `Prefixo:`, value: `${client.config.prefix}` , inline: true},
       {name: `Versão do bot:`, value: `${client.config.v}`, inline: true},
       {name: `Total de comandos:`, value: `${client.cmdsN}`, inline: true},
       {name: `Total de membros:`, value: `${client.users.cache.size}`, inline: true},
       {name: `Total de servidors:`, value: `${client.guilds.cache.size}`, inline: true},
       {name: `Ping:`, value: `${clientms}`, inline: true},
       {name: `Memoria Ram em uso:`, value: `${r}`, inline: true},
       {name: `API`, value: `${Math.round(client.ws.ping)}ms`, inline: true},
       {name: `Tempo online:`, value: `${uptime}`, inline: true})
   .addField(`** **`, `
   **Servidor de Suporte:**\n [Link do convite](https://discord.gg/NjfeECe)\n
   **Me convide para o seu servidor:**\n [Convite-bot](https://discord.com/oauth2/authorize?client_id=763206138421968947&scope=bot&permissions=469822518)\n
   **Meus criadores são:**\n <@638157424099852288> e <@417381720879529995> (! Haru#0001 e Ed.#0405)`, false)
   .setTimestamp()
   .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)

   message.channel.send(embed)
}