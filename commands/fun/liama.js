const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {

 
               fetch("https://apis.duncte123.me/llama")
            .then(res => res.json()).then(body => {
                if(!body) return message.reply(" whoops. I broke, try again!")
         let embed = new Discord.MessageEmbed()
                .setColor("#00ff00")
                .setFooter("Запросил: " + message.author.tag)
                .setImage(body.data.file)
                .setTimestamp()
                message.channel.send(embed);
                message.delete();
        })
    }
    module.exports.help = {
        name: "liama"
      }
