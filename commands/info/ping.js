const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed() 
    .setColor("#D3AD60") 
    .setDescription(`${message.author.tag}` + ", задержка соединения установлена, задержка:  " + "**" + Math.floor(bot.ws.ping) + " ms**") 
      message.delete();
    message.channel.send(embed); 
    }
    
    module.exports.help = {
      name: "ping"
    }