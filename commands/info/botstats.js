const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
   
    let m = require('moment-duration-format'),
    os = require('os'),
    cpuStat = require('cpu-stat'),
    fetch = require('node-fetch'),
    parse_ms = require('parse-ms')
    cpuStat.usagePercent(function (error, percent, seconds) {
        if (error) {
          return console.error(error)
        }

  let uptime = ``;
  let days = 0;
  let week = 0;
      let totalSeconds = (bot.uptime / 1000);
      let hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      let minutes = Math.floor(totalSeconds / 60);
      let secondss = Math.floor(totalSeconds % 60);
      if(hours > 23){
          days = days + 1;
          hours = 0;
      }
      if(days == 7){
          days = 0;
          week = week + 1;
      }
      if(week > 0){
          uptime += `${week} недель, `;
      }
      if(minutes > 60){
          minutes = 0;
      }
      uptime += `${days} дней, ${hours} часов, ${minutes} минут и ${secondss} секунд`;
      const cores = os.cpus().length
      const cpuModel = os.cpus()[0].model
      const CPU = percent.toFixed(2)
     
  const embed = new Discord.MessageEmbed() 
  .setAuthor("Официальная статистика бота FunBot")
  /*.setThumbnail("https://cdn.discordapp.com/attachments/600654307066380288/681833702774538289/bcf6fcb5ce4e98c8a16b5b62d06b944b.png") */
  .setColor(`GREEN`)
  .addField("<:member:710370212251172864> Пользователей", bot.users.cache.size.toLocaleString(), true)
  .addField("<:103:602280284448358431> Серверов", bot.guilds.cache.size.toLocaleString(), true)
  .addField("<:c_2:698539320859951114>/<:c_1:698539262508924969> Каналов", bot.channels.cache.size.toLocaleString(), true)
  .addField("<a:1010:600659778720497664> Использование RAM", `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`, true)
  .addField("<a:1010:600659778720497664> CPU", ` Нагрузка: ${CPU}% `, true)
  .addField(":clock1: Время работы", uptime)
  message.channel.send(embed); 
    message.delete();
    }
    
    )
}



module.exports.help = {
  name:"botstats"
}
