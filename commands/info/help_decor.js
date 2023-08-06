const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if(message.author.bot) return; 
    if(message.channel.type === "dm") return;
      const embed = new Discord.MessageEmbed()
        .setTitle("Раздел: **Оформление**")
        .setDescription(
          "**Используй категории:** `/help_admins` `/help_info` `/help` \n \n Для оформления сервера используйте команды, которые представлены ниже. \n \n `/hsay` - отправка сообщения вебхуком, нужно просто написать команду для получения доп. инфо. \n `/esay` - отправка сообщения ботом в embed"
        )
        .setColor("#FF6900")
        .setFooter(
          "Пользуясь ботом, вы соглашаетесь с условиями пользования и политикой конфедециальности.",
          "https://i.yapx.ru/HKXSY.png"
        );
      message.channel.send(embed);
      message.delete();

}



module.exports.help = {
    name: "help_decor"
  }