module.exports.run = async (client, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Como assim você quer banir alguem?\nesse comando é para staff.");
    message.delete();

    const Discord = require('discord.js');
    const fotoA = message.author.displayAvatarURL();
    const botA = client.user.displayAvatarURL();

    let db = client.database.ref(`Servidores/S${message.guild.id}/painel/configuração/canais`);

    db.once("value").then(async function(snap) {

    if(snap.val() == null) {

        return message.channel.send('Chat de banimento não foi setado')
    } else {

    let canal = snap.val().banimento;

    let pessoa = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    if(!pessoa) return message.channel.send("Mencione a pessoa que queira banir. Não esqueça do motivo também em...")

    if(pessoa.id === message.author.id) return message.channel.send('Oloko. Você não pode se banir. <:denkipensante:728158933855895584>')
    pessoa1 = pessoa.user

    if(pessoa.roles.cache.has("742953609020440606")) {//742953609020440606
        return message.reply(`Pq diabos vc quer banir alguém da staff?`)
    } else if(pessoa.roles.cache.has("742953668952981556")) {
        return message.reply(`Pq diabos vc quer banir alguém da staff?`)
    } else if(pessoa.roles.cache.has("742953903922085900")) {
        return message.reply(`Pq diabos vc quer banir alguém da staff?`)
    }  else if(pessoa.roles.cache.has("742953753191383132")) {
        return message.reply(`Pq diabos vc quer banir alguém da staff?`)
    } else {

    let bc = message.guild.channels.cache.get(canal)
    if(!bc) return message.channel.send(`Não foi possivel achar o chat de banimento.`)

    let staff = message.author.id

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "Não foi explicado o motivo"

    const exampleEmbed = new Discord.MessageEmbed()
	.setColor(client.config.cor)
	.setAuthor('Banimento', `${fotoA}`)
    .setDescription('Registro de banimento')
    .setThumbnail('https://i.imgur.com/6WoPZDe.png')
	.addFields(
		{ name: 'Autor do banimento:', value: `<@${staff}>`, inline: true },
        { name: 'Usuario banido:', value: `Nick: ${pessoa1.tag}\nid: ${pessoa1.id}`, inline: true },
        { name: 'Pelo motivo:', value: `${reason}`, inline: true },
	)
	.setTimestamp()
    .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)



    const embed = new Discord.MessageEmbed()
    .setColor(client.config.cor)
    .setAuthor('Cartinha:', `${botA}`)
    .setDescription(`Você foi banido por este motivo:\n***${reason}***`)
    .setThumbnail('https://i.imgur.com/B3vFy68.png')
    .setTimestamp()
    .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)

        pessoa.send(embed).catch(err => message.channel.send('Aviso! a carta não foi entrege (Dm bloqueada)'))


    setTimeout(function () {

        pessoa.ban({days:7, reason:`${reason}`})
        bc.send(exampleEmbed)
        message.reply('Banimento feito.')

	}, parseInt(2000));
    }
   }
  })
}