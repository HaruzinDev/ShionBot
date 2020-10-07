module.exports.run = (client, message, args) => {

    const options = message.content.replace(`${client.config.prefix}pick `, "").split(" | ");
    const result = options[Math.floor(Math.random() * options.length)];

    message.channel.send(`Eu escolhi \`${result}\``)

}
