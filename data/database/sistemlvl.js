module.exports.sistemlvl = (client, message, nivel, membro) => {

  let padrao = "Você subiu para o nível:"

  let db2 = client.database.ref(`Servidores/S${message.guild.id}/painel/configuração/canais`);
  
  let db3 = client.database.ref(`Servidores/S${message.guild.id}/painel/configuração/msgs`);

  let db4 = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/tagslevel`);


  db2.once("value").then(async function(c) {
    if(c.val() == null){
      return 
    }
    let canal = c.val().clvl;

  db3.once("value").then(async function(snap) {

    if(snap.val() == null) {

      db3.set({

        UpMsg: padrao

      });
    }

    let msglvl = snap.val().UpMsg;
    let sendC = message.guild.channels.cache.get(canal)
    let sendMU = `${message.author}, ${msglvl} **${nivel}**`

  db4.once("value").then(async function(snap) {
    if(snap.val() === null){
      return 
    } else {
    let idE = snap.val().tag1lvl
    let idD = snap.val().tag2lvl
    let idC = snap.val().tag3lvl
    let idB = snap.val().tag4lvl
    let idA = snap.val().tag5lvl

    let tierE = message.guild.roles.cache.get(idE)
    let tierD = message.guild.roles.cache.get(idD)
    let tierC = message.guild.roles.cache.get(idC)
    let tierB = message.guild.roles.cache.get(idB)
    let tierA = message.guild.roles.cache.get(idA)

    if(!sendC) return

    if(!tierE) return
    if(!tierD) return 
    if(!tierC) return 
    if(!tierB) return
    if(!tierA) return

    if(nextLevel >= 11) {
      //tier E
      
      if(nextLevel <= 25) {
      if(!membro.roles.cache.has(tierE.id)) {
      sendC.send(sendMU)
      membro.roles.add(tierE)
      }
    } else if(nextLevel >= 26) {
       

      //tier D
      if(nextLevel <= 30) {
      if(membro.roles.cache.has(tierE.id)){
      membro.roles.remove(tierE)
      }

      if(!membro.roles.cache.has(tierD.id)){
      sendC.send(sendMU)
      membro.roles.add(tierD)
      }
    } else if(nextLevel >= 31) {
      

      //tier C
      if(nextLevel <= 45) {
      if(membro.roles.cache.has(tierD.id)){
      membro.roles.remove(tierD)
      }

      if(!membro.roles.cache.has(tierC.id)) {
      sendC.send(sendMU)
      membro.roles.add(tierC)
      }
    } else if(nextLevel >= 46) {

      //tier B
      if(nextLevel <= 50) {

      if(membro.roles.cache.has(tierC.id)){
      membro.roles.remove(tierC)
      }

      if(!membro.roles.cache.has(tierB.id)) {
      sendC.send(sendMU)
      membro.roles.add(tierB)
      }
    } else if(nextLevel >= 51) {

      //tier A
      if(nextLevel <= 61) {
      if(!tierA) return
      if(membro.roles.cache.has(tierB.id)){
      membro.roles.remove(tierB)
      }

      if(!membro.roles.cache.has(tierA.id)) {
      sendC.send(sendMU)
      membro.roles.add(tierA)
         }
        }
        }
        }
  	   }
  	  }
     }
    }
   })
  })
 })
}