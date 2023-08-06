const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
const weather = require('weather-js'); 

weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
// if (err) message.channel.send("**Ошибка:** " + err);
var err = {
 "missing search input": "отсутствует агрумент для поиска"
}
 if (message.content.split(" ").length < 2) {
message.delete();
const errorembed = new Discord.MessageEmbed();
errorembed.setDescription(err + "\n Имя ошибки: `missing search input`");
errorembed.setColor("#D9A744");
message.channel.send(errorembed);
return;
}
const errorembed2 = new Discord.MessageEmbed();
errorembed2.setDescription("Город не найден!");
errorembed2.setColor("#D9A744");

// if (err) message.channel.send(errorembed2); 

if (result[0] == undefined) {
message.channel.send(errorembed2)
 return;
}
var current = result[0].current; 
var location = result[0].location; 
let weatherds = {
"Sunny": "Солнечно",
"Clear": "Чисто",
"Mostly Sunny": "В основном солнечная",
"Cloudy": "Облачно",
"Mostly Cloudy": "В основном облачно",
"Sunny": "Солнечно",
"Rain": "Дождь",
"Partly Cloudy": "Переменная облачность",
"Rain Showers": "Дождь",
"Light Rain": "Легкий дождь",
"Partly Sunny": "Местами солнечно",
"T-Storms": "Сильный дождь с грозой",
"Mostly Clear": "В большей степени ясно"
} 
const errorembed = new Discord.MessageEmbed();
errorembed.setDescription(err);
errorembed.setColor("#D9A744");
if (err) message.channel.send(errorembed);
const embed = new Discord.MessageEmbed()
    .setDescription(`**${weatherds[current.skytext]}**`) 
    .setAuthor(`Погода в ${current.observationpoint}`) 
    .setThumbnail(current.imageUrl) 
    .setColor(0x00AE86) 
    .addField('Часовой пояс',`UTC${location.timezone}`, true) 
    .addField('Тип измерения',location.degreetype, true)
    .addField('Температура',`${current.temperature} градусов °C`, true)
    .addField('По ощущениям', `${current.feelslike} градусов °C`, true)
    .addField('Ветер',current.winddisplay, true)
    .addField('Влажность', `${current.humidity}%`, true)
    message.channel.send(embed);

})
};
module.exports.help = {
    name: "weather"
  }