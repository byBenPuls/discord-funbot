const fetch = require('node-fetch');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json()).then(body => {
          if(!body) return message.reply(" ой, я сломался.")
const embed = new Discord.MessageEmbed()
.setColor("#00ff00")
.setImage(body.message)
.setFooter("Запросил: " + message.author.tag)
message.delete();
 
message.channel.send(embed);
  })
}

module.exports.help = {
    name: "dog"
  }
