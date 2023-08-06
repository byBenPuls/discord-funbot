const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
.setDescription('<:103:602280284448358431> [добавить бота на сервер](https://discordapp.com/oauth2/authorize?client_id=561215189572386826&scope=bot&permissions=2146958847) \n <a:1010:600659778720497664> [тех. поддержка бота](https://discordapp.com/invite/8Gcc84Z)')
.setColor("00ffff")
 message.channel.send(embed);
 console.log(message.author.tag + " написал команду /links");
    message.delete();
}


module.exports.help = {
    name: "links"
}