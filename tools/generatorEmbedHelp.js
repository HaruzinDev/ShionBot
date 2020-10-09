let paginasForEmbed = []

const embedhelp = (client) => {
const cmdD = require('../data/json/cmds.json')

let paginaInicial = `<:categorias:763422282269196320> **Categorias de comandos:**\n 
<:admin:763420394958094376> **| Administrator | (${cmdD.administrator.length})**\n
<:config:763420347969961995> **| Config | (${cmdD.config.length})**\n
<:money:763415435004608526> **| Economy system | (${cmdD.economy_system.length})**\n
<a:fun:763423633732534284> **| Fun | (${cmdD.fun.length})**\n
<:info:763420290965307402> **| Information | (${cmdD.info.length})**\n
<a:ban:763424759089987626> **| Moderation | (${cmdD.moderation.length})**\n 
<:utils:763426072359862313> **| Utils | (${cmdD.utils.length})**\n
🆙 **| Xp system | (${cmdD.xp_system.length})**\n`

let administrator = [""]
let config = [""]
let economy_system = [""]
let fun = [""]
let info = [""]
let moderation = [""]
let utils = [""]
let xp_system = [""]

  for (let index = 0; index < cmdD.administrator.length; index++) {
    const CommandName = cmdD.administrator[index].nome
    const CommandUsage = cmdD.administrator[index].usage
    const CommandDescription = cmdD.administrator[index].description
  
    if(index === 0) {
      let commandNow = "<> = Obrigatorio () = opcional\n\n\n" + `**Comando ${CommandName}:**\n**Use:** ${client.config.prefix}${CommandUsage}\n**Descrição:**\n${CommandDescription}\n\n`
      administrator.shift()
      administrator.push(commandNow)
    }  else {
      let commandNow = administrator[0] + `**Comando ${CommandName}:**\n**Use:** ${client.config.prefix}${CommandUsage}\n**Descrição:**\n${CommandDescription}\n\n`
      administrator.shift()
      administrator.push(commandNow)
    }
  }

for (let index = 0; index < cmdD.config.length; index++) {
  const CommandName = cmdD.config[index].nome
  const CommandUsage = cmdD.config[index].usage
  const CommandDescription = cmdD.config[index].description

  if(index === 0) {
    let commandNow = "<> = Obrigatorio () = opcional\n\n\n" + `**Comando ${CommandName}:**\n**Use:** ${client.config.prefix}${CommandUsage}\n**Descrição:**\n${CommandDescription}\n\n`
    config.shift()
    config.push(commandNow)
  }  else {
    let commandNow = config[0] + `**Comando ${CommandName}:**\n**Use:** ${client.config.prefix}${CommandUsage}\n**Descrição:**\n${CommandDescription}\n\n`
    config.shift()
    config.push(commandNow)
  }
}



  for (let index = 0; index < cmdD.economy_system.length; index++) {
    const CommandName = cmdD.economy_system[index].nome
    const CommandUsage = cmdD.economy_system[index].usage
    const CommandDescription = cmdD.economy_system[index].description
  
    if(index === 0) {
      let commandNow = "<> = Obrigatorio () = opcional\n\n\n" + `**Comando ${CommandName}:**\n**Use:** ${client.config.prefix}${CommandUsage}\n**Descrição:**\n${CommandDescription}\n\n`
      economy_system.shift()
      economy_system.push(commandNow)
    }  else {
      let commandNow = economy_system[0] + `**Comando ${CommandName}:**\n**Use:** ${client.config.prefix}${CommandUsage}\n**Descrição:**\n${CommandDescription}\n\n`
      economy_system.shift()
      economy_system.push(commandNow)
    }
  }




  for (let index = 0; index < cmdD.fun.length; index++) {
    const CommandName = cmdD.fun[index].nome
    const CommandUsage = cmdD.fun[index].usage
    const CommandDescription = cmdD.fun[index].description
  
    if(index === 0) {
      let commandNow = "<> = Obrigatorio () = opcional\n\n\n" + `**Comando ${CommandName}:**\n**Use:** ${client.config.prefix}${CommandUsage}\n**Descrição:**\n${CommandDescription}\n\n`
      fun.shift()
      fun.push(commandNow)
    }  else {
      let commandNow = fun[0] + `**Comando ${CommandName}:**\n**Use:** ${client.config.prefix}${CommandUsage}\n**Descrição:**\n${CommandDescription}\n\n`
      fun.shift()
      fun.push(commandNow)
    }
  }


  for (let index = 0; index < cmdD.info.length; index++) {
    const CommandName = cmdD.info[index].nome
    const CommandUsage = cmdD.info[index].usage
    const CommandDescription = cmdD.info[index].description
  
    if(index === 0) {
      let commandNow = "<> = Obrigatorio () = opcional\n\n\n" + `**Comando ${CommandName}:**\n**Use:** ${client.config.prefix}${CommandUsage}\n**Descrição:**\n${CommandDescription}\n\n`
      info.shift()
      info.push(commandNow)
    }  else {
      let commandNow = info[0] + `**Comando ${CommandName}:**\n**Use:** ${client.config.prefix}${CommandUsage}\n**Descrição:**\n${CommandDescription}\n\n`
      info.shift()
      info.push(commandNow)
    }
  }


  for (let index = 0; index < cmdD.moderation.length; index++) {
    const CommandName = cmdD.moderation[index].nome
    const CommandUsage = cmdD.moderation[index].usage
    const CommandDescription = cmdD.moderation[index].description
  
    if(index === 0) {
      let commandNow = "<> = Obrigatorio () = opcional\n\n\n" + `**Comando ${CommandName}:**\n**Use:** ${client.config.prefix}${CommandUsage}\n**Descrição:**\n${CommandDescription}\n\n`
      moderation.shift()
      moderation.push(commandNow)
    }  else {
      let commandNow = moderation[0] + `**Comando ${CommandName}:**\n**Use:** ${client.config.prefix}${CommandUsage}\n**Descrição:**\n${CommandDescription}\n\n`
      moderation.shift()
      moderation.push(commandNow)
    }
  }


  for (let index = 0; index < cmdD.utils.length; index++) {
    const CommandName = cmdD.utils[index].nome
    const CommandUsage = cmdD.utils[index].usage
    const CommandDescription = cmdD.utils[index].description
  
    if(index === 0) {
      let commandNow = "<> = Obrigatorio () = opcional\n\n\n" + `**Comando ${CommandName}:**\n**Use:** ${client.config.prefix}${CommandUsage}\n**Descrição:**\n${CommandDescription}\n\n`
      utils.shift()
      utils.push(commandNow)
    }  else {
      let commandNow = utils[0] + `**Comando ${CommandName}:**\n**Use:** ${client.config.prefix}${CommandUsage}\n**Descrição:**\n${CommandDescription}\n\n`
      utils.shift()
      utils.push(commandNow)
    }
  }



  for (let index = 0; index < cmdD.xp_system.length; index++) {
    const CommandName = cmdD.xp_system[index].nome
    const CommandUsage = cmdD.xp_system[index].usage
    const CommandDescription = cmdD.xp_system[index].description
  
    if(index === 0) {
      let commandNow = "<> = Obrigatorio () = opcional\n\n\n" + `**Comando ${CommandName}:**\n**Use:** ${client.config.prefix}${CommandUsage}\n**Descrição:**\n${CommandDescription}\n\n`
      xp_system.shift()
      xp_system.push(commandNow)
    }  else {
      let commandNow = xp_system[0] + `**Comando ${CommandName}:**\n**Use:** ${client.config.prefix}${CommandUsage}\n**Descrição:**\n${CommandDescription}\n\n`
      xp_system.shift()
      xp_system.push(commandNow)
    }
  }

  paginasForEmbed.push(paginaInicial, administrator, config, economy_system, fun, info, moderation, utils, xp_system)

}

module.exports = {
    embedhelp,
    paginasForEmbed
}