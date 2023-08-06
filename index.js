const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
let purple = botconfig.purple;
let cooldown = new Set();
let cdseconds = 3;

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }



  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });


});
fs.readdir("./commands/fun", (err, files) => {
  let jsfile = files.filter(f => f.split(".").pop() === "js");

jsfile.forEach((f, i) =>{
  let props = require(`./commands/fun/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props);
});

fs.readdir("./commands/admin", (err, files) => {
  let jsfile = files.filter(f => f.split(".").pop() === "js");

jsfile.forEach((f, i) =>{
  let props = require(`./commands/admin/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props);
});
});
fs.readdir("./commands/info", (err, files) => {
  let jsfile = files.filter(f => f.split(".").pop() === "js");

jsfile.forEach((f, i) =>{
  let props = require(`./commands/info/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props);
});
});
fs.readdir("./commands/util", (err, files) => {
  let jsfile = files.filter(f => f.split(".").pop() === "js");

jsfile.forEach((f, i) =>{
  let props = require(`./commands/util/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props);
});
});
});

bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);
  bot.user.setActivity("FunBot", {type: "WATCHING"});

});


bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;



  let prefix = "/";
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("подожди 5 секунд!")
  }
    cooldown.add(message.author.id);
  


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

});

bot.on("guildCreate", guild => {
  let defaultChannel = "";
  guild.channels.cache.find(channel => {
    if (channel.type == "text" && defaultChannel == "") {
      if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
        defaultChannel = channel;
      }
    }
  });
  let embed = new Discord.MessageEmbed()
    .setAuthor(`О, круто, я пришёл к вам!`)
    .addField(
      "Привет, я много функциональный FunBot",
      "Спасибо, что добавили меня на сервер!"
    )
    .addField(
      "Информация",
      "Скоро у бота появятся новые функции. Если хочешь быть в курсе всех изменений бота - заходи на наш сервер [нажимай сюда (кликабельно)!](https://discord.gg/muTrY8e) \n Чтобы узнать полный список команд, напиши `/help` \n \n **P.S Извините, если написали не в тот канал.**"
    )
    .setColor("#f5a052");
  defaultChannel.send(embed);
});

const Monitoring = new Discord.WebhookClient(
  "696300258065514577",
  "zvFvQAvjP2iAT_xwbPKEGW6QPX-abETCKBmoDSrZzElsY7hUWeylxRjVCh4yNCa5pyF6");

bot.on("guildDelete", guild => {
  {
    const embed = new Discord.MessageEmbed();
    embed.setAuthor(
      "Server removed", "https://media.discordapp.net/attachments/652103601480663042/665389317010751500/server_s.png");
    embed.setTitle(`<:fb_logo:712287209616703508> ${bot.user.tag} вышел с сервера`);
    embed.addField(`Имя сервера:`, `${guild.name}`, true);
    embed.addField(`Пользователей:`, `${guild.memberCount}`, true);
    embed.addField(`Каналов и категорий:`, `${guild.channels.cache.size}`, true);
    embed.addField(`Регион:`, `${guild.region}`, true);
    embed.addField("Эмодзи:", `${guild.emojis.cache.size}`, true);
    embed.addField("Ролей:", `${guild.roles.cache.size}`, true);
    embed.addField("Дата создания:", guild.createdTimestamp, true);
    embed.setThumbnail(guild.iconURL() || "https://i.imgur.com/bBZ1d73.png");
    embed.setColor("#2f3136");
    embed.setFooter(`${guild.id}`);
    embed.setTimestamp();
    Monitoring.send(embed);
        console.log("[AUTO] Данные на мониторинг успено заргужены!")
    let requestPromise = require(`request-promise-native`);

    requestPromise({
      uri: "https://api.server-discord.com/v2/bots/561215189572386826/stats",
      method: "POST",
      headers: {
        Authorization:
          "SDC eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2MTIxNTE4OTU3MjM4NjgyNiIsInBlcm1zIjowLCJpYXQiOjE1ODY5NTkyMjJ9.bP2-vL_Dj3zbeKmqNOZ3PJ_U_0_IGkdvaD6k9K_Rasc",
        "Content-Type": "application/json"
      },
      form: {
        servers: bot.guilds.cache.size,
        shards: 0
      },
      json: true
    }).catch(e => console.log(e));
  }
});

bot.on("guildCreate", guild => {
  {
    const embed = new Discord.MessageEmbed();
    embed.setAuthor(
      "Server added", "https://media.discordapp.net/attachments/652103601480663042/665389299797327903/server_p.png");
    embed.setTitle(`<:fb_logo:712287209616703508> ${bot.user.tag} зашёл на сервер`);
    embed.addField(`Имя сервера:`, `${guild.name}`, true);
    embed.addField(`Пользователей:`, `${guild.memberCount}`, true);
    embed.addField(`Владелец:`, `${guild.owner.user.tag}`, true);
    embed.addField(`Каналов и категорий:`, `${guild.channels.cache.size}`, true);
    embed.addField(`Регион:`, `${guild.region}`, true);
    embed.addField("Эмодзи:", `${guild.emojis.cache.size}`, true);
    embed.addField("Ролей:", `${guild.roles.cache.size}`, true);
    embed.addField("Дата создания:", guild.createdTimestamp, true);
    embed.setThumbnail(guild.iconURL() || "https://i.imgur.com/bBZ1d73.png");
    embed.setColor("#2f3136");
    embed.setFooter(`${guild.id}`);
    embed.setTimestamp();
    console.log("[AUTO] Данные на мониторинг успено заргужены!")
    let requestPromise = require(`request-promise-native`);

    requestPromise({
      uri: "https://api.server-discord.com/v2/bots/561215189572386826/stats",
      method: "POST",
      headers: {
        Authorization:
          "SDC eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2MTIxNTE4OTU3MjM4NjgyNiIsInBlcm1zIjowLCJpYXQiOjE1ODY5NTkyMjJ9.bP2-vL_Dj3zbeKmqNOZ3PJ_U_0_IGkdvaD6k9K_Rasc",
        "Content-Type": "application/json"
      },
      form: {
        servers: bot.guilds.cache.size,
        shards: 0
      },
      json: true
    }).catch(e => console.log(e));
    Monitoring.send(embed);
    const update = new Discord.MessageEmbed()
      .setAuthor("Статистика бота: [561215189572386826] [FunBot#3120]")
      .setColor(`GREEN`)
      .addField("Пользователей", bot.users.cache.size)
      .addField("Серверов", bot.guilds.cache.size)
      .addField("Каналов", bot.channels.cache.size)
      .addField(
        "Использование ram",
        Math.round(process.memoryUsage().heapUsed / 1024 / 1024)
      )
      .addField("Задержка:", Math.floor(bot.ws.ping))
      .setFooter("Статистика обновляется: каждый новый сервер");
    bot.guilds.cache
      .get("600258783729549322")
      .channels.cache.get("720568358306840577")
      .messages.fetch("720570995127091240")
      .then(m => m.edit(update));
  }
});

bot.on("message", message => {
 
let prefix = "/";

  if (message.content.match(/^<@!?561215189572386826> ?/gi)) {
      if(message.author.bot) return; 
    let embed = new Discord.MessageEmbed()
      .setDescription("Текущий префикс для этого сервера: `" + prefix + "` \n Вспомогательная команда: `" + prefix + "help`")
      .setColor("#D3AD60");
    message.channel.send(embed);
  }
});


bot.on("guildMemberAdd", async member => {
  let sayac = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
let otorole =  JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
let arole = otorole[member.guild.id].sayi
let giriscikis = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));  
let embed = new Discord.MessageEmbed()
.setTitle('Система автороли')
.setDescription(` <@${member.user.id}>' присоединился на сервер `)
.setColor("GREEN")
.setFooter("FunBot", client.user.avatarURL);

if (!giriscikis[member.guild.id].kanal) {
return;
}

try {
let giriscikiskanalID = giriscikis[member.guild.id].kanal;
let giriscikiskanali = bot.guilds.cache.get(member.guild.id).channels.get(giriscikiskanalID);
giriscikiskanali.send(`::white_check_mark: текст **${member.user.tag}** текст`);
} catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
return console.log(e)
}

});
//Kullanıcı sunucudan ayrıldığında ayarlanan kanala mesaj gönderelim.
bot.on("guildMemberAdd", async (member) => {
let autorole =  JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
let role = autorole[member.guild.id].sayi

member.roles.add(role)

if(message.guild.id != "id") return;
client.on("guildMemberAdd", member => {
  member.addRole('680293405192224778');
})

});



bot.login("NTYxMjE1MTg5NTcyMzg2ODI2.XJ4-YA.S-KY7TtIqfhBjrYnLoD_2WZCi2w");