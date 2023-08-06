
const Discord = require("discord.js");
let moderator = new Discord.WebhookClient("727500527381905438", "r2iDeXrRtzUsiSrH4XlzOQGsssGcVlkBjwDzU7HkYDzP_EwjAWnnwdZCmiwMTM6anFEY")

module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("У вас нет разрешения на выполнение этой команды!")

    
if(isNaN(args[0])) return message.channel.send("Вам необходимо предоставить ID.")
  let bannedMember = await bot.users.fetch(args[0])
      if(!bannedMember) return message.channel.send("Пожалуйста, предоставьте ID пользователя, чтобы разблокировать кого-то!")

  let reason = args.slice(1).join(" ") || "Не указана";

  if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("У меня нету прав для этой команды!")|
  message.delete()
  try {
      message.guild.members.unban(bannedMember, reason)
  } catch {
      console.log(e.message)
  }

  let embed = new Discord.MessageEmbed()
  .setColor("#78b354")
  .setAuthor("Успешно!", "https://cdn.iconscout.com/icon/free/png-512/verify-perfect-heavy-check-mark-38018.png")
  .addField("Действие", "Разблокировка")
  .addField("Разблокированный:", `${bannedMember.tag} [${bannedMember.id}]`)
  .addField("Модератор:", `<@${message.author.id}>`)
  .addField("Причина:", reason)
  .setTimestamp();

   const unban = new Discord.MessageEmbed();
  unban.setAuthor("UnBan add");
  unban.addField(`Имя сервера:`, `${message.guild.name}`);
  unban.addField(`Действие:`, `Разблокировка`);
  unban.addField(`Модератор:`, `${message.author.tag} [${message.author.id}]`);
  unban.addField(`Разблокированный:`, `${bannedMember.tag} [${bannedMember.id}]`);
  unban.addField("Причина:", `${reason}`);
  unban.setThumbnail(message.guild.iconURL() || "https://i.imgur.com/bBZ1d73.png");
  unban.setColor("#2f3136");
  unban.setFooter(`${message.guild.id}`);
  unban.setTimestamp();
  moderator.send(unban);

  
      message.channel.send(embed);

  }
  module.exports.help = {
    name: "unban"
  }