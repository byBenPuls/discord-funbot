const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setColor("#D3AD60")
    .setDescription(`**${message.author.tag}` + " улыбается**")
    .setImage("https://i.gifer.com/WbeA.gif")
      message.delete();
    
    message.channel.send(embed);




}


module.exports.help = {
    name: "smile"
  }