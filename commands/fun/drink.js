const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setColor("#d3ad60")
    .setDescription(`**${message.author.tag} выпил(-a)**`)
    .setImage("https://i.gifer.com/eUn.gif")
      message.delete();
    
    message.channel.send(embed);
    }

    module.exports.help = {
        name: "drink"
      }
   