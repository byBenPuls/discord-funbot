const  Discord  = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let embed = new Discord.MessageEmbed()
    .setAuthor(bot.user.tag, bot.user.avatarURL())
    .setTitle('Пригласить бота')
    .setURL('https://bit.ly/2CcQEOe')
    .setColor("#f16913")
	message.channel.send(embed);
}

module.exports.help = {
  name: "invite"
}