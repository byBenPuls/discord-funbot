const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if(message.author.bot) return; 
  if(message.channel.type === "dm") return;
    const embed = new Discord.MessageEmbed()
      .setTitle("Раздел: **Инфо**")
      .setDescription(
        "**Используй категории:** `/help_admins` `/help_decor` `/help` \n \n **Справка:** \n`<  >` - обязательный аргумент \n `[  ]` - необязательный аргумент \n \n `/botstat` - Статистика бота \n `/about` - Информация о боте \n `/links` - Ссылки бота \n `/donate` - Информация о донате боту \n `/server` - Информация о сервере \n `/ping` - Проверка задержки соединения \n `/avatar [@user]` - Показывает аватар `/user [@user/id]` - информация о пользователе \n `/covid <Country> - статистика пандемии, страну писать на английском!`"
      )
      .setColor("#0693E3")
      .setFooter(
        "Пользуясь ботом, вы соглашаетесь с условиями пользования.",
        "https://i.yapx.ru/HKXSY.png"
      );
    message.channel.send(embed);
    message.delete();

}



module.exports.help = {
    name: "help_info"
  }