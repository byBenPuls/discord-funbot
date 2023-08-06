const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Официальные новости бота')
    .setColor("00ffff")
    .setDescription('<a:0192:680787222865510401> 666 серверов!')
     message.channel.send(embed);
     console.log(message.author.tag + " написал команду /news");
        message.delete();

}

module.exports.help = {
    name: "news"
}