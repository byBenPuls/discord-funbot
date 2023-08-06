const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    if (!args[0]) {
        return message.channel.send("Укажите HEX color")
            
    }

    const fetch = require("node-fetch");

    fetch(`https://api.alexflipnote.dev/colour/${args[0]}`)
    .then(res => res.json()).then(body => {
        if(!body) return message.channel.send("Кажется что-то сломалось..")

const embed = new Discord.MessageEmbed()
.setAuthor("Название: " + body.name)
.setImage(`https://api.alexflipnote.dev/color/image/${args[0]}`)
.setDescription(`${body.hex} | ${body.rgb}`)
.setColor(body.hex)
message.channel.send(embed);
message.delete();
}
    )}
module.exports.help = {
    name: "color"
}