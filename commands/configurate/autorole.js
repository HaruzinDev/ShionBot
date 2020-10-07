module.exports.run = (client, message, args) => {

    let db = client.database.ref(`Servidores/S${message.guild.id}/painel/configuração/autorole`)//vou ver como tá a database lá

    if(!args[0]) return message.channel.send('Você tem que mencionar ou colocar id de alguma tag')

    let tag = message.guild.roles.cache.get(args[0]) || message.mentions.roles.first()
    if(!tag) return message.channel.send('Não foi encontrada a tag')

    
    db.once("value").then(async function(snap) {

    if(snap.val() == null) {
    db.set({
        autorole: tag.id
    })
    message.channel.send(`A tag ${tag} foi setada com sucesso!`)
    } else {
        db.update({
            autorole: tag.id
        })
        message.channel.send(`A tag ${tag} foi setada com sucesso!`)
    }
})
}