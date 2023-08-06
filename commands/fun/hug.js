const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    if (!hugUser) return message.reply('Укажите пожалуйста участника которого хотите обнять!')

    let embed = new Discord.MessageEmbed()
    .setAuthor("Обнимашки!")
    .setDescription(`<@${message.author.id}> обнял <@${hugUser.id}>`)
    .setImage("https://i.pinimg.com/originals/2d/41/38/2d4138c7c24d21b9d17f66a54ee7ea03.gif")
    .setColor('#ffc0cb')
    message.delete()
    message.channel.send(embed);
}

module.exports.help = {
    name: "hug"
  }