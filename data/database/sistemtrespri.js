module.exports.sistemtrespri = (client, message) => {
  let leaderboardDB = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/perfis/`).orderByChild('xp')
  const db = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/tagstoprank/`);

  Promise.all([leaderboardDB.once('value')]).then(function(resp) {
    const toprank = resp[0].val();

    if(toprank == null) return;
    var objetosRank = []
    var keys = Object.keys(toprank)
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];

    objetosRank.push(toprank[k])

    }
    var byXP = objetosRank.slice(0);
      byXP.sort(function(a,b) {
      return b.xp - a.xp;
    });


    
    db.once("value").then(async function(snap) {
    if(snap.val() == null) {
      return;
    } else {
    let top1id = snap.val().tag1lvl
    let top2id = snap.val().tag2lvl
    let top3id = snap.val().tag3lvl

    let top1 = message.guild.roles.cache.get(top1id) //pink
    let top2 = message.guild.roles.cache.get(top2id) //blue
    let top3 = message.guild.roles.cache.get(top3id) //black
    for (var i = 0; i < 4; i++) {
      var id = byXP[i].id;
      let idm = message.guild.member(message.guild.members.cache.get(id))
      if(i === 0) {
        idm.roles.add(top1)
        if(idm.roles.cache.has(top2.id)) {
          idm.roles.remove(top2)
        }
      }else if(i === 1){
        idm.roles.add(top2)
        if(idm.roles.cache.has(top3.id)) {
          idm.roles.remove(top3)
        }
        if(idm.roles.cache.has(top1.id)) {
          idm.roles.remove(top1)
        }
      }else if(i === 2){
        idm.roles.add(top3)
        if(idm.roles.cache.has(top2.id)) {
          idm.roles.remove(top2)
        }
    }else if(i === 3){
        if(idm.roles.cache.has(top3.id)) {
          idm.roles.remove(top3);
      }
    }
  }
  }
})
})
}