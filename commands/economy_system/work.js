const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
    name: 'work',
	async execute(message, args, client) {

        if(!args[0]) return message.channel.send("Você não disse um trabalho! Trabalhos disponíveis: programador")
    
        let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`)

        let namecoin = await db.fetch(`coin_${message.guild.id}`)
        if(namecoin === null) namecoin = "ShionCoin"

        let minwork = await db.fetch(`minwork_${message.guild.id}`)
        if(minwork === null) minwork = 0

        let maxwork = await db.fetch(`maxwork_${message.guild.id}`)
        if(maxwork === null) maxwork = 500

        let random = Math.floor(Math.random() * (+maxwork - +minwork)) + +minwork
        const chance = Math.floor(Math.random() * 100)



            if(args[0] == 'programador') {
                const replywin = [`Você programou um novo sistema operacional e ele explodiu! Você ganhou **${random} ${namecoin}**`, `Você concertou muitos erros de código do Facebook e ganhou **${random} ${namecoin}**! Pog`, `Você fez **${random} ${namecoin}** trabalhando para a apple!`]
                const replyw = replywin[Math.floor(Math.random() * replywin.length)]

                const replylost = [`Você fez um pequeno erro que fez sua empresa perder milhões, junto com os milhões você perdeu **${random} ${namecoin}**! oof`, `Você acabou dormindo no trabalho e perdeu **${random} ${namecoin}**!`, `Já pensou em quitar do ramo? Você perdeu **${random} ${namecoin}** por ser ruim`]
                const replyl = replylost[Math.floor(Math.random() * replylost.length)]

                const embed = new Discord.MessageEmbed()
                .setTitle("Opa!")
                .setDescription(replyw)
                .setFooter("Trabalhos disponíveis: Programador")

                const lost = new Discord.MessageEmbed()
                .setTitle("Aff!")
                .setDescription(replyl)
                .setFooter("Trabalhos disponíveis: Programador")


                if(chance < 50) {
                    db.subtract(`money_${message.guild.id}_${message.author.id}`, random)
                    message.channel.send(lost)
                }
                if(chance > 50) {
                    db.add(`money_${message.guild.id}_${message.author.id}`, random)
                    message.channel.send(embed)
                        }
                    }
                }
            }