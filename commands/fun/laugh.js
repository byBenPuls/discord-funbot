const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setColor("#D3AD60")
    .setDescription(`**${message.author.tag}` + " смеётся**")
    .setImage("https://vgif.ru/gifs/142/vgif-ru-17718.gif")
      message.delete();
    
    message.channel.send(embed);




}


module.exports.help = {
    name: "laugh"
  }