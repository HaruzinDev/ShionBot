const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const firebase = require('firebase');
const client = new Discord.Client();

const tokens = require("./data/token/tokens.json");
const config = require("./data/config/config.json");
const cmdD = require('./data/json/cmds.json')

let cmds = cmdD.administrator.length + cmdD.config.length + cmdD.economy_system.length + cmdD.fun.length + cmdD.info.length + cmdD.moderation.length + cmdD.utils.length + cmdD.xp_system.length;

client.administrator = new Enmap();
client.configurate = new Enmap();
client.utils = new Enmap();
client.fun = new Enmap();
client.moderation = new Enmap();
client.xp_system = new Enmap();
client.economy_system = new Enmap();
client.info = new Enmap();

client.config = config;
client.cmdsN = cmds

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
    console.log(`carregado o comando: ${commandName}`);
    client.economy_system.set(commandName, props);
  });
});

fs.readdir("./commands/info/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/info/${file}`);
    let commandName = file.split(".")[0];
    console.log(`carregado o comando: ${commandName}`);
    client.info.set(commandName, props);
  });
});


const { firebaseShion1, firebaseShion2 } = require('./data/database/loginFirebase.js')

firebaseShion1(client, firebase, tokens)

firebaseShion2(client)

client.login(tokens.token);