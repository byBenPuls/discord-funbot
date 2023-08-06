const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setColor("#D3AD60")
    .setDescription(`**${message.author.tag}` + " думает**")
    .setImage("https://data.whicdn.com/images/311609198/original.gif")
      message.delete();
    
    message.channel.send(embed);




}


module.exports.help = {
    name: "think"
  }