const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.author.bot) return; 
    if(message.channel.type === "dm") return;
      const embed = new Discord.MessageEmbed()
        .setTitle("Раздел: **Утилиты**")
        .setDescription(
          "**Используй категории:** `/help_admins` `/help_info` `/help` \n \n **Справка:** \n`<  >` - обязательный аргумент \n `[  ]` - необязательный аргумент \n \n \
           `/weather <Город>` - показывает погоду \n `/covid <Country>` - показывает информацию о COVID-19 \n `/hastebin <Текст>` - загружает текст на сервис Hastebin \
           \n`/reverse <Текст>` - пишет ваш текст наоборот")
        .setColor("#87A7C8")
        .setFooter("Пользуясь ботом, вы соглашаетесь с условиями пользования и политикой конфедециальности.", "https://i.yapx.ru/HKXSY.png");
      message.channel.send(embed);
      message.delete();


}


module.exports.help = {
    name: "help_utils"
  }