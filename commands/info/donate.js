const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("00ffff")
    .setTitle('⊹──⊱✠~ПОКУПКА ПРИВИЛЕГИЙ~✠⊰──⊹')
    .setThumbnail('https://cdn.discordapp.com/attachments/600654307066380288/680755482289373235/WumpusLove.png')
    .setDescription('<:101:602271505832738856> [Qiwi Копилка](https://qiwi.me/donate-to-bot)' + '\n <a:1005:600657027936550922>Подарить Discord Nitro: **Ben Puls#9048** ' + '\n <:102:602276510308499467> [Donation Alerts](https://clck.ru/MEj9v)' + "\n \n \n ᅠᅠᅠᅠᅠᅠᅠᅠᅠᅠᅠᅠᅠᅠ**Содержимое паков** \n \n • `Lite Pack` **(250 рублей) - допуск к созданию 3 кастомных команд, vip chat и допуск lvl 1.** \n \n • `Premium Pack` **(500 рублей) - доступ к элитным мероприятям, почётная роль на сервере поддержки, допуск к созданию 6 кастомных команд, розыгрыши, допуск lvl 2.** \n \n • `Legendary Pack` **(1000 рублей) - допуск к тест функционалу, допуск к секретному серверу, неограниченное кол-во кастомных команд, скидка 45% на все привелегии в боте, допуск lvl 3.** \n \n • Тут описана краткая информация для донатеров в файле .txt [нажми для скачивания](https://cdn.discordapp.com/attachments/686887305302245385/713391306440704041/6f52b3ed8fc15021_3.txt)");
    const embed2 = new Discord.MessageEmbed()
      .setTitle("Справочник по донату")
      .setDescription("**Куда отправлять деньги?** - заходите на [тык](https://qiwi.me/donate-to-bot) , вписываете в колонку Аккаунт ваш дискорд ник: `Ben Puls#9048`, а позже вписываете услугу, цена пишется взависимости от услуги, если вы хотите просто поддержать бота впишите в колонку услуга `donate` сумму выберете сами.")
      .setColor("0ffff");
      message.channel.send(embed);
      message.channel.send(embed2);
}
module.exports.help =
{
    name: "donate"
}
