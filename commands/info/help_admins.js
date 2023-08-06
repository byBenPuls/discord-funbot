const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.author.bot) return; 
    if(message.channel.type === "dm") return;
      const embed = new Discord.MessageEmbed()
        .setTitle("Раздел: **Администратор**")
        .setDescription(
          "**Используй категории:** `/help_info` `/help_decor` `/help` \n \n **Справка:** \n`<  >` - обязательный аргумент \n `[  ]` - необязательный аргумент \n \n `/kick <@user> [причина]` - Выгнать пользователя  \n `/ban <@user> [причина]` - Заблокировать пользователя \n `/unban <user id> [причина]` - Разблокировать пользователя  \n `/say <текст>` - Отправка сообщения ботом  \n `/clear <кол-во сообщений>` - Удаление сообщений ботом"
        )
        .setColor(0xff0000)
        .setFooter(
          "Пользуясь ботом, вы соглашаетесь с условиями пользования.",
          "https://i.yapx.ru/HKXSY.png"
        );
      message.channel.send(embed);
      message.delete();


}
module.exports.help = {
    name: "help_admins"
  }