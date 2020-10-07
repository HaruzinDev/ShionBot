const erros = require('../../tools/erros')

module.exports.run = (client, message, args) => {
    erros.cmdDev(client, message, args)
}