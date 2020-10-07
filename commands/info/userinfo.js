module.exports.run = async (client, message, args) => {
    
    const Discord = require('discord.js');
    const moment = require('moment')

    const botA = client.user.displayAvatarURL();

    let padrãoI = "https://i.imgur.com/in947uB.png"
    let sobremimP = "Use sy!sobremim <descrição> para colocar uma mensagem aqui"


    let pessoa = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author)
    const pessA = pessoa.user


    let db = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/perfis/M${pessA.id}`);
    moment.locale('pt-BR');
    
    let status = ""

    db.once("value").then(async function(snap) {

      if(snap.val() == null) {

    db.set({

      id: pessA.id,
      xp: 0,
      level: 1,
      bgI: padrãoI,
      sobremim: sobremimP,
      cookie: 0

    });

    message.channel.send('Opa, Tente novamente')
  } else {

    let level = snap.val().level - 1;


    let entrouTimestamp = Math.floor(pessoa.joinedAt.getTime()/1000.0);
    let criouTimestamp = Math.floor(pessA.createdAt.getTime()/1000.0);

    let entrou = `${entrouTimestamp}` + "270";
    let criou = `${criouTimestamp}` + "270";

    if(pessA.presence.status === "idle") status = "<:Ausente:732799443639992385> Ausente"
    if(pessA.presence.status === "online") status = "<:Online:732799443488866356> Online"
    if(pessA.presence.status === "offline") status = "<:Offline:732798733506576486> Offline"
    if(pessA.presence.status === "dnd") status = "<:Nopertuba:732799443581141043> Não pertube"

    let embed = new Discord.MessageEmbed()
        .setColor(client.config.cor)
        .setAuthor(`${pessA.tag}`, `${pessA.avatarURL({ dynamic: true, format: 'png', size: 2048 })}`)
        .setDescription(`${pessA}`)
        .setThumbnail(`${pessA.avatarURL({ dynamic: true, format: 'png', size: 2048 })}`)
        .addField("ID:", `${pessA.id}`, true)
        .addField('Entrou no server:', `${moment(entrou - 10800000).format('lll')}`, true)
        .addField("Criou a conta:", `${moment(criou - 10800000).format('lll')}`, true)
        .addField("Level Atual:", `${level}`, true)
        .addField('Status:', `${status}`, true)
        .setTimestamp()
        .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)

    message.channel.send(embed);
  }
})
}
