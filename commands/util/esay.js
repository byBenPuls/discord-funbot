const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

if (message.content.split(" ").length < 2) {
    message.delete();
    const eembed = new Discord.MessageEmbed();
    eembed.setDescription("Пожалуйста, укажите описание сообщения \n ``` /esay Привет!```");
    eembed.setColor("#D9A744");
    message.channel.send(eembed);
   return; } 
  const embed = new Discord.MessageEmbed();
  embed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 1024 }) || "https://i.imgur.com/bBZ1d73.png");
  embed.setColor("#df3131");
  embed.setDescription(message.content.split(" ").splice(1, message.content.split(" ").length).join(" "));
  message.channel.send(embed);
  message.delete();
}

module.exports.help = {
    name: "esay",
    description: "Отправка Embed сообщения через бота",

}
