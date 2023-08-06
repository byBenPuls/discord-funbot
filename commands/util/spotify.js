const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
let user;
if (message.mentions.users.first()) {
  user = message.mentions.users.first();
} else {
  user = message.author;
}

let convert = require('parse-ms')

let status = user.presence.activities[0];

if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") return message.channel.send("Сейчас вы не слушаете Spotify!");

if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
  let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
      url = `https://open.spotify.com/track/${status.syncID}`,
      name = status.details,
      artist = status.state,
      album = status.assets.largeText,
      timeStart = status.timestamps.start,
      timeEnd = status.timestamps.end,
      timeConvert = convert(timeEnd - timeStart);
  
  let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
  let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
  
  let time = `${minutes}:${seconds}`;
  
  const embed = new MessageEmbed()
  embed.setAuthor("Информация о треке Spotify", "https://upload.wikimedia.org/wikipedia/commons/f/f2/Logoappliandrospotify.png")
  embed.setColor(0x1ED768)
  embed.setThumbnail(image)
  embed.addField("Название:", name, true)
  embed.addField("Альбом:", album, true)
  embed.addField("Исполнитель:", artist, true)
  embed.addField("Продолжительность:", time)
  embed.addField("Слушай сейчас на Spotify!", `[\`${artist} - ${name}\`](${url})`)
  message.channel.send(embed)
}
}
module.exports.help = {
    name: "spotify"
}