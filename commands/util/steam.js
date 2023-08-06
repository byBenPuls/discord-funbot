const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {

fetch = require("node-fetch");

fetch(`https://api.alexflipnote.dev/steam/user/${args[0]}`)
.then(res => res.json()).then(body => {
    if(!body) return message.channel.send(" whoops. I broke, try again!")

    const publicct = {
        Private: "Да 🔐",
        Public: "Нет 🔓"
    }
let embed = new MessageEmbed()
    .setTitle("Профиль в Steam")
    .setURL(body.profile.url)
    .setDescription(`Steam ID 64: \`${body.id.steamid64}\``)
    .addField("Информация о профиле", `**- Имя:** ${body.profile.username}
    **- Настоящее имя:** ${body.profile.realname}
    **- Статус:** ${body.profile.state}
    **- Дата регистрации:** ${body.profile.timecreated}
    **- Локация:** ${body.profile.location}
    **- Приватный аккаунт:** ${publicct[body.profile.privacy]}`)
    .setColor("#599be5")
    .setFooter("Запросил: " + message.author.tag)
    .setThumbnail(body.avatars.avatarfull)
    .setTimestamp()
    message.channel.send(embed);
    message.delete();
})
}
module.exports.help = {
name: "steam"
}
