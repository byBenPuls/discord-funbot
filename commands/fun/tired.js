const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

 
    const embed = new Discord.MessageEmbed()
    .setColor("#d3ad60")
    .setDescription(`**${message.author.tag} наелся(-ась) и спит**`)
    .setImage("https://media.giphy.com/media/KIJAvs9u2i2Ri/giphy.gif")
      message.delete();
    
    message.channel.send(embed);
    }

module.exports.help = {
    name: "tired"
  }