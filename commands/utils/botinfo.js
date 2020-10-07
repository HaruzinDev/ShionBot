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
   .setDescription(`
   **Prefixo:**\n${client.config.prefix}\n
   **Versão do bot:**\n${client.config.v}\n
   **Total de comandos:**\n ${client.cmdsN[0]}\n
   **Ping:**\n${clientms}ms\n
   **Memoria ram:**\n${r}\n
   **API:**\n${Math.round(client.ws.ping)}ms\n
   **Tempo online:** \n${uptime}\n
   Servidor de Suporte: [Link do convite](https://discord.gg/NjfeECe)\n
   Me convide para o seu servidor: [Convite-bot](https://discord.com/oauth2/authorize?client_id=763206138421968947&scope=bot&permissions=469822518)\n
   Meus criadores são: <@638157424099852288> e <@417381720879529995> (! Haru#0001 e Ed.#0405)
   `)
   .setTimestamp()//anotações
   .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)

   message.channel.send(embed)
}