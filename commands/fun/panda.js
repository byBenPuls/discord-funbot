const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {

 
               fetch("https://some-random-api.ml/img/panda")
            .then(res => res.json()).then(body => {
                if(!body) return message.reply(" whoops. I broke, try again!")
         let embed = new Discord.MessageEmbed()
                .setColor("#00ff00")
                .setFooter("Запросил: " + message.author.tag)
                .setImage(body.link)
                .setTimestamp()
                message.channel.send(embed);
                message.delete();
        })
    }
    module.exports.help = {
        name: "panda"
      }





