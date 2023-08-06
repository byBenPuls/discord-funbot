const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

    const embed = new Discord.MessageEmbed()
    .setTitle('Наши друзья! <3')
    .setColor("00ffff")
    .setDescription('Хочу вам посоветовать сервер KILLZ. У нас добрые админы За помощь вы получите роли У нас есть музыка Множество ботов Есть игровой бот.  Вот ссылка на сервер -> https://discord.gg/aVCAEgg')
     message.channel.send(embed);
      message.delete();


}
module.exports.help = {
    name: "recomendation"
}

module.exports.run