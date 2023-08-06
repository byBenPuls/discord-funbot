const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#d3ad60")
    .setDescription(`**${message.author.tag} полетел(-a)**`)
    .setImage("https://i.gifer.com/E5TV.gif")
      message.delete();
    
    message.channel.send(embed);
    }
    module.exports.help = {
        name: "fly"
      }