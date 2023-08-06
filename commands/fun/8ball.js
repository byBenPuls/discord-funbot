const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return; 
    if(message.channel.type === "dm") return;
      if (!args[1])
        return message.reply(
          "Пожалуйста, введите полный вопрос с двумя или более словами!"
        );
      let replies = [
        "Да",
        "-_- Нет",
        "Я не знаю",
        "Я не расслышал! Повторите..",
        "Без понятия.",
        "Я не уверен!",
        "Нет, нет! Пожалуй, «нет»",
        "Кому ты это рассказываешь!",
        "Без сомнения! Конечно!",
        "Не могу предсказать сейчас!",
        "Без сомнения!",
        "Может хватит меня раздражать!",
        "Перспективы не очень хорошие.",
        "По моим данным — «нет»",
        "Определённо — «да»"
      ];
      let result = Math.floor(Math.random() * replies.length);
      let question = args.join(" ");
  
      let ballembed = new Discord.MessageEmbed()
        .setAuthor("Спросил: " + message.author.username)
        .setTitle("Магический шар")
        .setColor("#1cc3f6")
        .addField("Твой вопрос:", question)
        .addField("Мой ответ:", replies[result])
        .setThumbnail("https://i.gifer.com/XDZT.gif");
      message.channel.send(ballembed);
      message.delete();
    }

    module.exports.help = {
        name: "8ball"
      }