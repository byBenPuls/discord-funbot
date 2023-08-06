const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.author.bot) return; 
  if(message.channel.type === "dm") return;
    const embed = new Discord.MessageEmbed()
      .setTitle("Раздел: **Мини-Игры**")
     .setDescription(
        "**Используй категории:** `/help_info` `/help_decor` `/help` \n \n **Справка:** \n`<  >` - обязательный аргумент \n `[  ]` - необязательный аргумент \n \n `/8ball <вопрос>` - задайте магическому шару вопрос и он на него ответит!")

      .setColor("#FFA550")
      .setFooter(
        "Пользуясь ботом, вы соглашаетесь с условиями пользования.",
        "https://i.yapx.ru/HKXSY.png"
      );
    message.channel.send(embed);
    message.delete();


}

module.exports.help = {
    name: "help_games"
  }