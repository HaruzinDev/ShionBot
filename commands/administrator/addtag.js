module.exports.run = (client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Ah não... Não quero dar tag pra ninguém não.')

    let pessoa = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    if(!pessoa) return message.channel.send('Marque ou mande o id da pessoa que queira colocar uma tag')

    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])

    if(pessoa.roles.cache.has(role.id)) return message.channel.send('Essa pessoa já tem essa tag')
    
    pessoa.roles.add(role)

    message.channel.send(`A tag ${role} foi adicionada ao membro ${pessoa} com sucesso <:miyanoFeliz:735307767673258015>`)
}