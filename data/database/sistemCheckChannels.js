module.exports.sistemCheckChannels = (client, message) => {

    const sistemxp = require('./sistemxp.js');
    
    let channelsForSistemXP = client.database.ref(`Servidores/S${message.guild.id}/painel/sistemxp/canais/`).orderByChild('id')

    Promise.all([channelsForSistemXP.once('value')]).then(function(resp) {
    const allChannels = resp[0].val();


    if(allChannels == null) return;

    var objetosChannels = []
    var keys = Object.keys(allChannels)

    
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];

    objetosChannels.push(allChannels[k])

    }
    
    for(var i = 0; i < objetosChannels.length; i++) {

      if(message.channel.id === `${objetosChannels[i].id}`) {
      sistemxp.sistemxp(client, message);
      }
    }
  })
}