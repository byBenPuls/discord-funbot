const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
  if(message.author.bot) return; 
if(message.channel.type === "dm") return;
if (message.content.split(" ").length < 2) {
  message.delete();
  const eembed = new Discord.MessageEmbed();
  eembed.setDescription(
    "Пожалуйста, укажите описание сообщения \n ``` /say Привет!```"
  );
  eembed.setColor("#D9A744");
  message.channel.send(eembed);
  return;
}


message.channel.send(
  message.content.split(" ").splice(1, message.content.split(" ").length).join(" "));

}
module.exports.help = {
  name: "say"
}
