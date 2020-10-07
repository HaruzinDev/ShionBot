const sendimage = require('./sendimage.js')
const jimp = require('jimp')


// Make de imagem Rank e perfil

module.exports.perfilI = async (client, message, idu, xp, level, bgI, cookie, sobremim) => {
    let usuario = idu.avatarURL({format: 'png', size: 2048});
    let fonte = await jimp.loadFont(jimp.FONT_SANS_64_WHITE)   
    let background = await jimp.read(`${bgI}`)

    jimp.read(`${client.config.mask}`).then(mascara => {
    jimp.read(`./images/layout/PerfilI.png`).then(baseP => {
    jimp.read(`./images/layout/transparente.png`).then(transparente => {


    jimp.read(usuario).then(avatar => {
        avatar.resize(592, 592)
        mascara.resize(592, 592)
        avatar.mask(mascara)
        background.resize(1920, 1080)
        transparente.composite(background, 0, 265)
        baseP.print(fonte, 717, 1411, `${idu.tag}`)
        baseP.print(fonte, 147, 1683, `EXP: ${xp}`)
        baseP.print(fonte, 147, 1780, `Nivel: ${level}`)
        baseP.print(fonte, 1505, 1529, `Cookies: ${cookie}`)
        baseP.print(fonte, 717, 1631, `Sobre Mim:`, 1100)
        baseP.print(fonte, 717, 1691, `${sobremim}`, 1100)
        baseP.composite(avatar, 58, 1050)
        transparente.composite(baseP, 0, 0).write('./images/perfil.png')

        sendimage.perfilI(client, message, idu)
    })
   })
  })
 })
}


module.exports.perfilIC = async (client, message, idu, xp, level, bgI, cookie, sobremim, marry) => {

    let fonte = await jimp.loadFont(jimp.FONT_SANS_64_WHITE)   
    let background = await jimp.read(`${bgI}`)
    let usuario = idu.avatarURL({format: 'png', size: 2048});
    let marryUser = message.guild.member(message.guild.members.cache.get(marry))
    let marryI = marryUser.user.avatarURL({format: 'png', size: 2048})

    jimp.read(`${marryI}`).then(mIJ => {
    jimp.read(`./images/layout/transparente.png`).then(transparente => {
    jimp.read(`./images/layout/perfilC.png`).then(base => {
    jimp.read(`${client.config.mask}`).then(mascara => {

    jimp.read(usuario).then(avatar => {
        background.resize(1920, 1080)
        avatar.resize(592, 592)
        mascara.resize(592, 592)
        avatar.mask(mascara)
        mIJ.resize(354, 354)
        mascara.resize(354, 354)
        mIJ.mask(mascara)
        transparente.composite(background, 0, 265)
        base.print(fonte, 717, 1411, `${idu.tag}`)
        base.print(fonte, 147, 1683, `EXP: ${xp}`)
        base.print(fonte, 147, 1780, `Nivel: ${level}`)
        base.print(fonte, 1505, 1529, `Cookies: ${cookie}`)
        base.print(fonte, 717, 1631, `Sobre Mim:`, 1100)
        base.print(fonte, 717, 1691, `${sobremim}`, 1100)
        base.print(fonte, 92, 53, `Casado(a) com:`)
        base.print(fonte, 92, 113, `${marryUser.user.tag}`)
        base.composite(mIJ, 1440, 73)
        base.composite(avatar, 58, 1050)
        transparente.composite(base, 0, 0).write('./images/perfil.png')

        sendimage.perfilI(client, message, idu)
     })
    })    
   })
  })
 })
}

// Make image Ship

module.exports.ship = async (client, message, aut , menção, autAvatar, mençãoAvatar) => {
    let aleatorio = Math.floor(Math.random() * 100);

    let fundo = await jimp.read(`${client.config.basesw}`);
    let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK)
    let mençãoALoaded = await jimp.read(`${mençãoAvatar}`);

    jimp.read(autAvatar).then(avatar => {
        mençãoALoaded.resize(128, 128)
        fundo.print(fonte, 160, 40, `${aleatorio}%`)
        fundo.composite(mençãoALoaded, 256,0)
        fundo.composite(avatar, 0, 0).write('./images/ship.png')

        sendimage.shipIN(client, message, aut, menção)
    })
    
}