const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    const hastebin = require('hastebin-gen');

         let haste = args.slice(0).join(" ")

        let type = args.slice(1).join(" ")

        if (!args[0]) { return message.channel.send("Что вы хотите опубликовать в Hastebin? \nНапишите что-нибудь") }

        hastebin(haste).then(r => {
const embed = new Discord.MessageEmbed()
.setAuthor("Успешно!")
.setDescription("`Опубликовано в Hastebin по этому URL:`  " + "**" + r + "**")
.setFooter("Опубликовал: " + message.author.tag)
.setColor("#454A4F");
          
            message.channel.send(embed);

        }).catch(console.error);

        message.delete();

} 

module.exports.help = {
    name: "hastebin"
}