const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let msg = message.content.toLowerCase();
      if(message.author.bot) return; 
  if(message.channel.type === "dm") return;
    async function purge() {
      message.delete();
      if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.channel.send(
          "Недостаточно прав для использования этой команды!"
        );
        return;
      }
      if (isNaN(args[0])) {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            "Пожалуйста, укажите количество сообщений для очистки (до 100): ``` /clear 15``` \n • Бот не может очищать сообщения старше двух недель! \n • Бот может удалить максимум 100 сообщений"
          )
          .setColor("#7A7A7A");
        message.channel.send(embed);
        return;
      }
      const fetched = await message.channel.messages.fetch({ limit: args[0] });
      const eembed = new Discord.MessageEmbed()
        .setDescription("`Удалено сообщений: " + fetched.size + "`")
        .setFooter("Это системное сообщение будет удалено через 5 секунд!")
        .setColor("#D5C562");
      
      message.channel.send(eembed).then(botmsg => {
        botmsg.delete({ timeout: "5000" });
      });

      message.channel
        .bulkDelete(fetched)
        .catch(error => message.channel.send(`**Ой, ошибка: ${error}**`));
    }
    purge();
  }

module.exports.help = {
  name: "clear"
}
