const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
const answers = ["https://www.cinemafia.ru/upload/images/2016/06/Memoriam%20GOT/Tommen.gif",
                 "https://static.life.ru/tmp/giphy-1587122924979.gif"]
const otvet = answers[Math.floor(Math.random() * answers.length)]


const embed = new Discord.MessageEmbed()
.setColor("#d3ad60")
.setDescription(`**${message.author.tag} покинул(-а) помещение**`)
.setImage(otvet)
message.delete();

message.channel.send(embed);
}
module.exports.help = {
    name: "exit"
  }