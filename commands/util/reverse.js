const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (args.length < 1) {
        message.channel.send('Введи текст, чтобы он был обратным!');
     return;
    }
    const embed = new Discord.MessageEmbed();
  embed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 1024 }) || "https://i.imgur.com/bBZ1d73.png");
  embed.setColor("#36393f");
  embed.setDescription(args.join(' ').split('').reverse().join(''))
    message.channel.send(embed);
   

}


module.exports.help = {
    name: "reverse"
}