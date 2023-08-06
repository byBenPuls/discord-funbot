const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
.setTitle('Бонусыы!!')
.setThumbnail('https://cdn.discordapp.com/attachments/586934819536240640/682965768576565267/b304ca69b1cd487534a428030cd62f36.png')
.setColor("RANDOM")
.setDescription("<:Trophy:576491685714853903> Для активации введите бонус! \n Пример бонуса: `/UIGKAHSVKS-4982096209806-ORJKSNL`");
  message.delete();

 message.channel.send(embed);
}

module.exports.help = {
    name: "bonus"
}