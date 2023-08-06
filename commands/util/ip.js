const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

    if (!args[0]) {
        return message.channel.send("Укажите IP адрес!")
            
    }

    const fetch = require("node-fetch");

    fetch(`http://ipwhois.app/json/${args[0]}?lang=ru`)
    .then(res => res.json()).then(body => {
        if(!body) return message.channel.send("Кажется что-то сломалось..")
        

        const embed = new Discord.MessageEmbed()
        .setTitle("Информация о " + body.ip)
        .addField("Страна", body.country)
        .addField("Регион", body.region)
        .addField("Город", body.city)
        .addField("Координаты", `\`${body.latitude} ${body.longitude}\``)
        .addField("Телефон", `\`${body.country_phone} () __ __ __\``)
        .setThumbnail(body.country_flag)
        .setColor("#3492cc")
        .setTimestamp()
        .setFooter("Выполнено запросов: " + body.completed_requests);
    message.channel.send(embed).catch(error => {
        return channel.send(
          "**Произошла ошибка:** " + `${body.message}` 
        );
      });
    })
}

module.exports.help = {
    name: "ip"
}