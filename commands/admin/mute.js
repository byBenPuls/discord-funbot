const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

let mUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])


let muterole = message.guild.roles.cache.find(role => role.name === "Muted");

if (!mUser) return message.reply("Вы не указали пользователя!")

if (!args) return message.reply("Вы не указали причину!")

if (!muterole) return message.reply("На этом сервере нету роли **Muted**, создайте её!");

mUser.roles.add(muterole)



var mute_embed = new Discord.MessageEmbed()
    .setColor('#db0f0f')
    .addField('Модератор', `<@${message.author.id}>`)
    .addField('Выдал мут', `${mUser}`)
    .addField('По причине', `${args[1]}`)

var dm_mute_embed = new Discord.MessageEmbed()
        .setColor('#db0f0f')
        .addField('Модератор', `<@${message.author.id}>`)
        .addField('Выдал мут', `${mUser}`)
        .addField('На сервере', `${mUser.guild}`)
        .addField('По причине', `${args[1]}`)

mUser.send(dm_mute_embed) 

message.channel.send(mute_embed)
    }
    module.exports.help = {
        name: "mute"
    }