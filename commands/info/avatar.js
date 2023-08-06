const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const user = message.mentions.users.first() || message.author 
    const avatarEmbed = new Discord.MessageEmbed()
        .setColor("#FFA550")
     .setAuthor(`${user.tag}`, user.displayAvatarURL({ dynamic: true, size: 1024 }))
     .setDescription(`[Аватарка](${user.avatarURL({ dynamic: true, size: 1024 })}) пользователя: <@${user.id}>`)
        .setImage(user.avatarURL({ dynamic: true, size: 1024 }) || "https://i.imgur.com/bBZ1d73.png");
    message.channel.send(avatarEmbed);
    message.delete();

}

module.exports.help = {
    name: "avatar"
  }