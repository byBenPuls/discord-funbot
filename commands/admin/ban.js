const Discord = require("discord.js");
let moderator = new Discord.WebhookClient("727500527381905438", "r2iDeXrRtzUsiSrH4XlzOQGsssGcVlkBjwDzU7HkYDzP_EwjAWnnwdZCmiwMTM6anFEY")

module.exports.run = async (bot, message, args) => {
  let error = new Discord.MessageEmbed()
    .setColor(11253955)
    .setDescription("У меня нету необходимых прав! Мне необходимо право: ADMINISTRATOR")
    .setImage("https://i.imgur.com/15by8Gn.gif");

      if(message.author.bot) return; 
  if(message.channel.type === "dm") return;
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        "Ошибка доступа! У вас недостаточно прав на использование команды!"
      );
    else if (!message.guild.me.hasPermission("BAN_MEMBERS"))
      return message.channel.send(error);

    let member = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(m => m.user.username == args[0] || m.id == args[0])
    );
    if (!member)
      return message.channel.send("Ошибка! Данный пользователь не найден!");
    else if (member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        "Ошибка! Я не могу исключить этого пользователя! У него тоже есть права администратора!"
      );
    
    if (member.user.id === "516644003186343939")
      return message.channel.send(
        "Извини, я не могу забанить своего создателя!"
      );
    let reason = args.slice(1).join(" ") || "Не указана";
    const successfully = new Discord.MessageEmbed()
      .setColor("#78b354")
      .setAuthor(
        "Успешно!",
        "https://cdn.iconscout.com/icon/free/png-512/verify-perfect-heavy-check-mark-38018.png"
      )
      .addField("Действие", "Блокировка (Бан)")
      .addField("Наказанный:", `<@${member.id}>`)
      .addField("Модератор:", `<@${message.author.id}>`)
      .addField("Причина:", `${reason}`)
      .setTimestamp();

      const ban = new Discord.MessageEmbed();
    ban.setAuthor("Ban add");
    ban.addField(`Имя сервера:`, `${message.guild.name}`);
    ban.addField(`Действие:`, `Блокировка (Бан)`);
    ban.addField(`Модератор:`, `${message.author.tag} [${message.author.id}]`);
    ban.addField(`Наказанный:`, `${member.user.tag} [${member.id}]`);
    ban.addField("Причина:", `${reason}`);
    ban.setThumbnail(message.guild.iconURL() || "https://i.imgur.com/bBZ1d73.png");
    ban.setColor("#2f3136");
    ban.setFooter(`${message.guild.id}`);
    ban.setTimestamp();
    moderator.send(ban);

    await member.ban({ reason: reason });
    await message.channel.send(successfully);
    message.delete();
  }

module.exports.help = {
  name:"ban"
}
