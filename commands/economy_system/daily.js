module.exports.run = async (client, message, args) => {

    const db = require("quick.db")
    const Discord = require('discord.js')
    const ms = require('parse-ms')

    let dailytotal = await db.fetch(`dailytotal_${message.guild.id}`)
    if(dailytotal === null) dailytotal = 500

    let dailymin = await db.fetch(`dailymin_${message.guild.id}`)
    if(dailytotal === null) dailymin = 0

    let namecoin = await db.fetch(`coin_${message.guild.id}`)
    if(namecoin === null) namecoin = "ShionCoin"

    let timeout = 86400000 
    let amount = Math.floor(Math.random() * (+dailytotal - +dailymin)) + +dailymin//só pra iniciar o bot
    
    let daily = await db.fetch(`daily_${message.guild.id}_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`Você já coletou seu daily de hoje! Você pode voltar em **${time.hours} horas, ${time.minutes} minutos, ${time.seconds} segundos**!`)
    } else {
        db.add(`money_${message.guild.id}_${message.author.id}`, amount)
        let newmoney = db.fetch(`money_${message.guild.id}_${message.author.id}`)
        db.set(`daily_${message.guild.id}_${message.author.id}`, Date.now())

        message.channel.send(`Você ganhou **${amount} ${namecoin}** Você agora tem **${newmoney} ${namecoin}**`)
    }



}