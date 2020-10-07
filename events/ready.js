module.exports = async client => {
    console.log(`Bot iniciado com susseso (${client.user.tag})`);

    let status = [
        {name: 'Fui criada pela TeamShion', type: 'WATCHING'},
        {name: `Precisa de ajuda? use sy!ajuda`, type: 'WATCHING'}
    ]
    function setStatus(){
        let randomStatus = status[Math.floor(Math.random()*status.length)]
        client.user.setPresence({activity: randomStatus})
    }
    setStatus();
    setInterval(() => setStatus(), 20000)
}