const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    if (!args[0]) {
        return message.channel.send("Укажите текст для генерации капчи")
            
    }

    const embed = new Discord.MessageEmbed()
    .setImage(`https://api.alexflipnote.dev/captcha?text=${args[0]}`)
    .setDescription("Ввёл капчу")
    .setFooter("Запросил: " + message.author.tag)
.setColor("#36393f");
message.channel.send(embed);
message.delete();
}


module.exports.help = {
    name: "capcha"
}