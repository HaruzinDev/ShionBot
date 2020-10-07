const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const firebase = require('firebase');
const client = new Discord.Client();

const tokens = require("./data/token/tokens.json");
const config = require("./data/config/config.json");

let cmds = ["0"];

var firebaseConfig = {
    apiKey: `${tokens.apiKey}`,
    authDomain: `${tokens.authDomain}`,
    databaseURL: `${tokens.databaseURL}`,
    projectId: `${tokens.projectId}`,
    storageBucket: `${tokens.storageBucket}`,
    messagingSenderId: `${tokens.messagingSenderId}`,
    appId: `${tokens.appId}`,
    measurementId: `${tokens.measurementId}`
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();


client.administrator = new Enmap();
client.configurate = new Enmap();
client.utils = new Enmap();
client.fun = new Enmap();
client.moderation = new Enmap();
client.xp_system = new Enmap();
client.economy_system = new Enmap();
client.developer = new Enmap();

client.config = config;
client.cmdsN = cmds
client.database = database;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});



fs.readdir("./commands/administrator/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/administrator/${file}`);
    let commandName = file.split(".")[0];
    let numero = cmds[0]++;
    cmds.push(numero)
    console.log(`carregado o comando: ${commandName}`);
    client.administrator.set(commandName, props);
  });
});



fs.readdir("./commands/utils/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/utils/${file}`);
    let commandName = file.split(".")[0];
    let numero = cmds[0]++;
    cmds.push(numero)
    console.log(`carregado o comando: ${commandName}`);
    client.utils.set(commandName, props);
  });
});



fs.readdir("./commands/fun/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/fun/${file}`);
    let commandName = file.split(".")[0];
    let numero = cmds[0]++;
    cmds.push(numero)
    console.log(`carregado o comando: ${commandName}`);
    client.fun.set(commandName, props);
  });
});



fs.readdir("./commands/moderation/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/moderation/${file}`);
    let commandName = file.split(".")[0];
    let numero = cmds[0]++;
    cmds.push(numero)
    console.log(`carregado o comando: ${commandName}`);
    client.moderation.set(commandName, props);
  });
});



fs.readdir("./commands/configurate/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/configurate/${file}`);
    let commandName = file.split(".")[0];
    let numero = cmds[0]++;
    cmds.push(numero)
    console.log(`carregado o comando: ${commandName}`);
    client.configurate.set(commandName, props);
  });
});



fs.readdir("./commands/xp_system/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/xp_system/${file}`);
    let commandName = file.split(".")[0];
    let numero = cmds[0]++;
    cmds.push(numero)
    console.log(`carregado o comando: ${commandName}`);
    client.xp_system.set(commandName, props);
  });
});

fs.readdir("./commands/economy_system/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/economy_system/${file}`);
    let commandName = file.split(".")[0];
    let numero = cmds[0]++;
    cmds.push(numero)
    console.log(`carregado o comando: ${commandName}`);
    client.economy_system.set(commandName, props);
  });
});

fs.readdir("./commands/developer/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/developer/${file}`);
    let commandName = file.split(".")[0];
    console.log(`carregado o comando: ${commandName}`);
    client.developer.set(commandName, props);
  });
});


client.on("guildMemberAdd", async (member) => {

  let db = client.database.ref(`Servidores/S${member.guild.id}/painel/configuração/canais`);

  db.once("value").then(async function(snap) {

    if(snap.val() == null) {

      return;
    } else {
      let chatID = snap.val().entrada
      let chat = member.guild.channels.cache.get(chatID)
      if(!chat) return;

      let embed = new Discord.MessageEmbed()
      .setColor(`${client.config.cor}`)
      .author(`Novo Membro!!`, ``)
      .setDescription(``)
      .setTimestamp()
      .setFooter(`Shion Bot ${client.config.v} by TeamShion`, ``)
      
    chat.send(embed)
    }
})

  setTimeout(function () {

  let tag = member.guild.roles.cache.get("681706134628728862")
  if(!tag) return;
  if(member.roles.cache.has(tag.id)) return;
  member.roles.add(tag)

}, parseInt(1000));
});










client.on("guildMemberRemove", (member) => {

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
});

client.login(tokens.token);