const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.author.bot) return; 
  if(message.channel.type === "dm") return;
  let region = {
    brazil: ":flag_br: Бразилия",
    europe: ":flag_eu: Европа",
    singapore: ":flag_sg: Сингапур",
    "us-central": ":flag_us: Центральный США",
    sydney: ":flag_au: Сидней",
    "us-east": ":flag_us: Восток США",
    "us-south": ":flag_us: США Юг",
    "us-west": ":flag_us: Запад США",
    japan: ":flag_jp: Япония",
    "vip-us-east": ":flag_us: VIP США Восток",
    london: ":flag_gb: Лондон",
    amsterdam: ":flag_nl: Амстердам",
    hongkong: ":flag_hk: Гон Конг",
    russia: ":flag_ru: Россия",
    southafrica: ":flag_za:  Южная Африка",
    india: ":flag_in:  Индия"
  };
  
    function checkOfflineUsers(guild) {
      let onlineCount = 0;
      guild.members.cache.forEach(member => {
        if (member.user.presence.status === "offline") onlineCount++;
      });
      return onlineCount;
    }
  
    function checkBots(guild) {
      let botCount = 0;
      guild.members.cache.forEach(member => {
        if (member.user.bot) botCount++;
      });
      return botCount;
    }
  
    function checkOnlineUsers(guild) {
          let onlineCount = 0;
          guild.members.cache.forEach(member => {
              if(member.user.presence.status === "online")
                  onlineCount++; 
          });
          return onlineCount;
      }
    let verifilv = {
      NONE: "<:139:701708128378421298> Отсутствует",
      LOW: "<:138:701707986254692402> Низкий",
      MEDIUM: "<:137:701705544825700413> Средний",
      HIGH: "<:136:701705297487462430> Высокий",
      VERY_HIGH: "<:135:701705062413500417> Очень высокий"
    };
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL())
      .addField("Владелец", `<:107:603260520568717324> <@${message.guild.ownerID}>`, true)
      .addField("ID", message.guild.id, true)
      .addField("Регион", region[message.guild.region], true)
      .addField("Участники", `<:134:701704070913589258> ${message.guild.presences.cache.size} в сети \n<:113:606844000531644422> ${checkOfflineUsers(message.guild)} не в сети\n<:140:701794297262899230>
      ${checkBots(message.guild)}ботов\n<:member:710370212251172864> ${message.guild.memberCount} всего`, true)
      .addField("Каналы", `<:c_1:698539262508924969> ${message.guild.channels.cache.filter(c => c.type == "text").size} текстовых\n<:c_2:698539320859951114> ${message.guild.channels.cache.filter(c => c.type == "voice").size} голосовых`, true)
      .addField("Уровень проверки", verifilv[message.guild.verificationLevel], true)
      .addField("Ролей", `<:mentions:710370118407815170> ${message.guild.roles.cache.size}`, true)
      .addField("Эмодзи", `<:emoji:710369993899900958>  ${message.guild.emojis.cache.size}`, true)
      .addField('Количество бустов', `<:88:600657255440056320> ${message.guild.premiumSubscriptionCount || 0}`, true)
      .setThumbnail(message.guild.iconURL() || "https://i.imgur.com/bBZ1d73.png")
      .setFooter(`Сервер создан`)
      .setTimestamp(new Date(message.guild.createdTimestamp))
      .setColor("#2f3136");
    message.channel.send(embed);
    message.delete();
  }


module.exports.help = {
  name:"server"
}
