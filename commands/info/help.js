const Discord = require("discord.js");
const fs = require("fs")
module.exports.run = async (bot, message, args) => {
if(message.author.bot) return; 
let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

if(!prefixes[message.guild.id]){
  prefixes[message.guild.id] = {
    prefixes: "!"
  };
}

let prefix = prefixes[message.guild.id].prefixes;
  if(message.channel.type === "dm") return;
    const embed = new Discord.MessageEmbed()
      .setTitle("Доступные команды:")
      .setDescription(
         "**Префикс бота на сервере:  `" + prefix  + "` \n **Сменить префикс можно командой: `set_prefix`** **\n • Команды/Категории на тех работах:  `нету` \n • При обнаружении поломки пишите:  `report`")
      .addField("• Бот/Конфигурация ", "`set_prefix` `botstats` `about` `links` `donate` `ping` `news` `recomendation` `invite`")
      .addField(
        `• Инфо (${prefix}help_info)`,
        " `server` `avatar` `user` `time` `invites`"
      )
      .addField(
        `• Администратор (${prefix}help_admins)`, "`kick` `ban` `unban` `say` `clear` ")
      .addField(`• Оформление (${prefix}help_decor)`, " `esay`")
      .addField(
        "• Приколы",
        "`laugh` `smile` `cry` `think` `pressf` `exit` `tired` `drink` `dog` `liama` `dance` `fly` `drinktea` `eat` `hug` `facts` `capcha` `panda` `fox`"
      )
      .addField(`• Мини-Игры (${prefix}help_games)`, "`8ball`")
      .addField(`• Утилиты (${prefix}help_utils)`, "`weather` `instagram` `spotify` `hastebin` `reverse` `color` `ip`")
      .addField(
        "\u200b",
        "[добавить бота](https://discordapp.com/oauth2/authorize?client_id=561215189572386826&scope=bot&permissions=2146958847) | [тех поддержка](https://discord.gg/muTrY8e) | [vk группа](https://vk.com/funbotgroup)"
      )
      .setColor("#ffa550")
  /*    .setThumbnail("https://i.yapx.ru/HenBz.png") */
      .setFooter(
        "FunBot 2020",
        "https://i.yapx.ru/HKXSY.png"
      );
    message.channel.send(embed);
    message.delete();
 
  }



  module.exports.help = {
    name: "help"
  }


