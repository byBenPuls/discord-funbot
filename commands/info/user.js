const strftime = require("strftime");
const fs = require("fs");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var userData = JSON.parse(fs.readFileSync('./userDate.json', 'utf8'));
    let member;
    if (message.mentions.members != null) {
      if (message.mentions.members.first())
        member = message.mentions.members.first();
      else
        member = message.guild.members.cache.get(message.content.split(" ")[1]);
    }
    if (!member) {
    }
    let argsUser;
    if (member) argsUser = member.user;
    else argsUser = message.author;

    if (!userData[argsUser.id]) userData[argsUser.id] = {
      messagesSent: "**Значков нету**"
  }



  fs.writeFile('./userDate.json', JSON.stringify(userData), (err) => {
      if (err) console.error(err); 
  });

  

  let statuses = {
    online: "<:online2:464520569975603200> В сети",
    idle: "<:away2:464520569862357002> Нет на месте",
    dnd: "<:dnd2:464520569560498197> Не беспокоить",
    offline: " <:offline2:464520569929334784> Не в сети"
  };
  let game;
  if (!argsUser.presence.game)
    game = `Имеет статус **${statuses[argsUser.presence.status]}**`;
  else if (argsUser.presence.game.type == 0)
    game = `Играет в **${argsUser.presence.game.name}**`;
  else if (argsUser.presence.game.type == 1)
    game = `Стримит [**${argsUser.presence.game.name}**](${argsUser.presence.game.url})`;
  else if (argsUser.presence.game.type == 2)
    game = `Слушает **${argsUser.presence.game.name}**`;
  else if (argsUser.presence.game.type == 3)
    game = `Смотрит **${argsUser.presence.game.name}**`;
  else if (argsUser.presence.game.type == 4)
    game = `Пользовательский статус: **${argsUser.presence.game.name}**`;

  let day = 1000 * 60 * 60 * 24;
  let date1 = new Date(message.createdTimestamp);
  let date2 = new Date(argsUser.createdTimestamp);
  let diff1 = Math.round(Math.abs((date1.getTime() - date2.getTime()) / day));

    const user = message.mentions.users.first() || message.author;
      if(message.author.bot) return; 
  if(message.channel.type === "dm") return;
    const embed = new Discord.MessageEmbed();
    embed.setAuthor(argsUser.tag, argsUser.avatarURL({ dynamic: true, size: 1024 }) || "https://i.imgur.com/bBZ1d73.png");
    embed.setDescription(`${game}`);
    embed.addField("Дата регистарции", `>>> ${strftime("%d.%m.%Y в %H:%M", new Date(argsUser.createdTimestamp))}\n(${diff1} дн. назад)`, true);
    embed.addField("Дата вступления", `${strftime("%d.%m.%Y в %H:%M", new Date(message.guild.member(argsUser).joinedTimestamp))}`, true);
    console.log(argsUser);
let roleList = "<@&" + message.guild.member(argsUser).roles.cache.filter(r => r.id != message.guild.id).map(role => role.id).join("> <@&") + ">";
    if (roleList == "<@&>") roleList = "Не имеет.";
    embed.addField("Роли", roleList).setColor("#2f3136");
    embed.addField('\u200b', `ID: ${argsUser.id}`)
    embed.setTimestamp();
    embed.setThumbnail(argsUser.avatarURL({ dynamic: true, size: 1024 }) || "https://i.imgur.com/bBZ1d73.png");
    embed.setFooter(`Страничка пользователя: ${argsUser.username}`, argsUser.avatarURL({ dynamic: true, size: 1024 }) || "https://i.imgur.com/bBZ1d73.png");
    message.channel.send(embed);
    message.delete();
}
module.exports.help = {
    name:"user"
  }

