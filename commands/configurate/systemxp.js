const erro = require('../../tools/erros')

module.exports.run = (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Opa, você não pode usar esse comando.')

    let prefixo = client.config.prefix

    let db = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/actived`)
    if(args[0] === "active"){
    db.once("value").then(async function(snap) {

        if(snap.val() === null) {
            db.set({
                actived: "ativado"
            })
        }else {
            db.update({
                actived: "ativado"
            })
        }
    })

    message.channel.send(`Sistema de XP ativado. Faça todos os comandos do: \`${prefixo}ajuda SistemaXp\` para ficar 100% funcional`)
    } else if(arg[0] === "desactivate") {

        db.once("value").then(async function(snap) {
    
            if(snap.val() === null) {
                db.set({
                    actived: "desativado"
                })
            }else {
                db.update({
                    actived: "desativado"
                })
            }
        })
    
        message.channel.send(`Sistema de XP Desativado.`)
    } else {

        let maneiraC = `${prefixo}systemxp active || ${prefixo}systemxp desactive`
        erro.cmdErr(client, message, maneiraC)
    }
    
}