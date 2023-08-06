const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (message.author.id !== "516644003186343939") {
      const eeeembed = new Discord.MessageEmbed()
        .setDescription(
          message.author.tag + ", у тебя нет значка <:33:600655611977269248>."
        )
        .setColor("C5934B");
      message.delete();
      message.channel.send(eeeembed);
      return;
    }
    if (message.content.split(" ").length < 2) {
      const eeembed = new Discord.MessageEmbed()
        .setDescription(message.author.tag + ", пропущен агрумент '`ID`'.")
        .setColor("C5934B");
      message.delete();
      message.channel.send(eeembed);
      return;
    }
    const embed = new Discord.MessageEmbed().setColor("C5934B").setDescription(
      "Ваш запрос `set leave bot * guild ID: " +
        message.content
          .split(" ")
          .slice(1)
          .join(" ") +
        "`" +
        " успешно выполнен <a:1023:705491116975194242>"
    );
    message.channel.send(embed);
    message.delete();
    bot.guilds.cache
      .get(
        message.content
          .split(" ")
          .slice(1)
          .join("")
      )
      .leave()
      .catch(err => {
        const eembed = new Discord.MessageEmbed().setColor("C5934B").setDescription(
          "Не удалось выполнить запрос `Set (Leave Bot) ID: " +
            message.content
              .split(" ")
              .slice(1)
              .join(" ") +
            "` <a:1024:705496824168841237>"`\n Возможная ошибка: ${err.message}`
        );
        message.channel.send(eembed);
        message.delete();
        console.error(err);
      });
  }; 
  

module.exports.help = {
    name: "set_leave"
}
