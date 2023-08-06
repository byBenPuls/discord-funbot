const Discord = require("discord.js");
const fs = require("fs");
let config = require("../botconfig.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setTitle("Недостаточное разрешение")
        .setColor(config.red)
        .addField("Требуется разрешение", perm);

    message.channel.send(embed).then(m => m.delete({timeout: 5000}));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setColor(config.red)
        .setTitle("Ошибка")
        .addField(`${user} у вас нету прав`, perms);

    message.channel.send(embed).then(m => m.delete({timeout: 5000}));

}

module.exports.botuser = (message) => {
    let embed = new Discord.MessageEmbed()
        .setTitle("Ошибка")
        .setDescription("Не могу забанить бота.")
        .setColor(config.red);

    message.channel.send(embed).then(m => m.delete({timeout: 5000}));
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.MessageEmbed()
        .setTitle("Ошибка")
        .setDescription("Не удалось найти этого пользователя.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete({timeout: 5000}));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.MessageEmbed()
        .setTitle("Ошибка")
        .setDescription("Пожалуйста, укажите причину.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete({timeout: 5000}));
}
