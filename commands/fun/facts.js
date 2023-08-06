const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    if (!args[0]) {
        return message.channel.send("Укажите текст для генерации факта")
            
    }

const embed = new Discord.MessageEmbed()
.setDescription("Щас размажем по фактам!")
.setImage(`https://api.alexflipnote.dev/facts?text=${args[0]}`)
.setFooter("Запросил: " + message.author.tag)
.setColor("#36393f");
message.channel.send(embed);
message.delete();
}


module.exports.help = {
    name: "facts"
}