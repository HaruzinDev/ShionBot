module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Hmm. Esse comando só quem faz é staff.");

    let mutee = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    if(!mutee) return message.channel.send("Use assim: sy!mute <menção> 5[s/m/h/d] <motivo>\n(s = segundo, m = minutos, h = horas, d = dias)");

    if(mutee.id === message.author.id) return message.channel.send('Francamente. Você não pode se mutar. <:denkipensante:728158933855895584>')

    const db = client.database.ref(`Servidores/S${message.guild.id}/painel/configuração/tagsmute`);

    const Discord = require('discord.js')

    
    var time = args[1];

    if (!time) return message.reply('Use assim: sy!mute <menção> 5[s/m/h/d] <motivo>\n(s = segundo, m = minutos, h = horas, d = dias)')


	time = await time.toString();

	if (time.indexOf('s') !== -1) { 
		var timesec = await time.replace(/s.*/, '');
		var timems = await timesec * 1000;
	} else if (time.indexOf('m') !== -1) { 
		var timemin = await time.replace(/m.*/, '');
		timems = await timemin * 60 * 1000;
	} else if (time.indexOf('h') !== -1) { 
		var timehour = await time.replace(/h.*/, '');
		timems = await timehour * 60 * 60 * 1000;
	} else if (time.indexOf('d') !== -1) { 
		var timeday = await time.replace(/d.*/, '');
		timems = await timeday * 60 * 60 * 24 * 1000;
	}	else {
		return message.reply('Use assim: sy!mute <menção> 5[s/m/h/d] <motivo>n(s = segundo, m = minutos, h = horas, d = dias)');
    }

    if(isNaN(timems)) return message.channel.send('Use assim: sy!mute <menção> 5[s/m/h/d] <motivo>\n(s = segundo, m = minutos, h = horas, d = dias)')

    
    db.once("value").then(async function(snap) {

    if(snap.val() == null) {

        return message.channel.send('As tags de Advertência 1/2 e Mute não foram configuradas')
    } else {

    let mutid = snap.val().mutetag
    let adv1id = snap.val().adv1tag
    let adv2id = snap.val().adv2tag


    let reason = args.slice(2).join(" ")
    if(!reason) return message.channel.send("Você tem que por um motivo.")

    let MuteRole = message.guild.roles.cache.get(mutid);
    if(!MuteRole) return message.channel.send(`A tag mutado não existe mais`)

    let Adv1 = message.guild.roles.cache.get(adv1id)
    if(!Adv1) return message.channel.send(`A tag de adv 1 não existe mais`)

    let Adv2 = message.guild.roles.cache.get(adv2id)
    if(!Adv2) return message.channel.send(`A tag de adv 2 não existe mais`)

    if(mutee.roles.cache.has(Adv2.id)) return message.channel.send(`Esse membro já tem 2 advertências.`)

    const botA = client.user.displayAvatarURL();

    const embed2 = new Discord.MessageEmbed()
    .setColor(client.config.cor)
    .setAuthor('Cartinha:', `${botA}`)
    .setDescription(`Você foi desmutado! Se você aprontar de novo vou mandar cartinha pra você novamente <:denkitabraba:741332615239303288>`)
    .setThumbnail('https://i.imgur.com/B3vFy68.png')
    .setTimestamp()
    .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)

	const unmutetemp = setTimeout(function () {

    if(!mutee.roles.cache.has(MuteRole.id)) return;

        mutee.roles.remove(MuteRole)
    	message.reply(`eu desmutei o ${mutee}`);
        mutee.send(embed2).catch(err => {
        
            message.channel.send('Aviso! A dm do mutado está bloqueada, não consegui enviar a cartinha.\n(Ele mesmo assim foi desmutado).')
        })

	}, parseInt(timems));


    const embed = new Discord.MessageEmbed()
    .setColor(client.config.cor)
    .setAuthor('Cartinha:', `${botA}`)
    .setDescription(`Você foi mutado por este motivo:\n***${reason}***`)
    .setThumbnail('https://i.imgur.com/B3vFy68.png')
    .setTimestamp()
    .setFooter(`Shion Bot ${client.config.v} by TeamShion`, `${botA}`)
    
    if(mutee.roles.cache.has(Adv1.id)) return mutee.roles.add(Adv2), mutee.roles.add(MuteRole), unmutetemp, message.channel.send(`Esse usuário já tem uma advertência, foi adcionado mais uma e também foi mutado. Ele será desmutado automaticamente daqui a ${time}`), mutee.send(embed).catch(err => {
        message.channel.send('Aviso! A dm do mutado está bloqueada, não consegui enviar a cartinha.\n(Ele mesmo assim foi mutado).')
    })

    mutee.roles.add(MuteRole);
    mutee.roles.add(Adv1);
    unmutetemp
    message.channel.send(`<@${mutee.id}> foi mutado e advertido. Ele será desmutado automaticamente daqui a ${time}`);
    mutee.send(embed).catch(err => {
        message.channel.send('Aviso! A dm do mutado está bloqueada, não consegui enviar a cartinha.\n(Ele mesmo assim foi mutado).')
    })
 }
})
}