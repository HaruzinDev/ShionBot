module.exports = (client, member) => {//esse aqui limpa o firebase da pessoa
let db = client.database.ref(`Servidores/S${member.guild.id}/painel/sistemxp/perfis/M${member.id}`);

db.once("value").then(async function(snap) {
  
    if(snap.val() == null){
  
    return;
    } else {
  
    let membro = snap.val().marry
    if(!membro) return db.remove()
        
let db2 = client.database.ref(`Servidores/S${member.guild.id}/painel/sistemxp/perfis/M${membro}`);
  
db2.once("value").then(async function(snap) {
  
    db2.update({
  
      marry: null

    })
    
    db.remove()
  })
  }
})
}