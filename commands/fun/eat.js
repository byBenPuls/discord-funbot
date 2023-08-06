const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#d3ad60")
    .setDescription(`**${message.author.tag} перекусил(-a)**`)
    .setImage("https://media3.giphy.com/media/tZaFa1m8UfzXy/giphy.gif")
      message.delete();
    
    message.channel.send(embed);
    }
    module.exports.help = {
        name: "eat"
      }