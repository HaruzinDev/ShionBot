const translate = require('@vitalets/google-translate-api');

module.exports.run = async (client, message, args) => {

    const lang = args[0]
    const msg = args.slice(1).join(" ")
        
    translate(msg, {to: lang}).then(res => {
       message.channel.send(`Tradução de **${res.from.language.iso}** para **${lang}**\n**${res.text}**`)
    }).catch(err => {
        console.error(err);
        message.channel.send("Ocorreu um erro!")
    });
}