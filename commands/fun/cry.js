const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setColor("#D3AD60")
    .setDescription(`**${message.author.tag}` + " плачет**")
    .setImage("https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif")
      message.delete();
    
    message.channel.send(embed);




}


module.exports.help = {
    name: "cry"
  }