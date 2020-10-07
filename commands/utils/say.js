module.exports.run = (client, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Opa! Alto lá. Esse comando é apenas para staff.");
    
    const falar = args.slice(0).join(" ")

    message.delete();

    if(!falar) return;

    message.channel.send(`${falar}`)
}