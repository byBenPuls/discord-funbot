const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))

    let embed = new Discord.MessageEmbed()
    .setColor("#D3AD60")
    .setDescription(`**${message.author.tag}` + " отдал(-а) честь, нажимая на F**")
    .setImage("https://i.gifer.com/JWa7.gif")
    message.delete()
    message.channel.send(embed);
}

module.exports.help = {
    name: "pressf"
  }