const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const talkedRecently = new Set();
  const usedCommand = new Set();
  const Reported = new Discord.WebhookClient(
    "727164622787837964",
   "HQxFM3jNzaat43mf80p_wKrbhTM0Zqddz64eLGLxNgiP9zOeqczE4IAHyNB4tqgKNxWN");
      /* if(usedCommand.has(message.author.id)){
          message.channel.send({embed: {
    color: "#03a9f4",
    description: message.author.username + ", думаешь самый умный <a:tineproidesh:712318140088057986>? \n <:slowmode:585790802979061760> Подожди ещё `60` секунд!"
  }}) 
      } else { */

           if (message.content.split(" ").length < 2) {
        const eembed = new Discord.MessageEmbed();
        eembed.setDescription(
          "Пожалуйста, укажите описание репорта! \n ```/report сломалась команда /help``` \n • Оффтоп в репорт строго запрещён!"
        );
        eembed.setColor("#03030E");
        message.channel.send(eembed);
             message.delete()
     return } 
      const embed = new Discord.MessageEmbed();
      embed.setAuthor(`Ваш запрос успешно отправлен`);
      embed.setDescription(
        `Содержание запроса: ${message.content.split(" ").slice(1).join(" ")} \n \n **Мы уже в пути..**`);
      embed.setImage("https://cdn.discordapp.com/attachments/600258783729549325/698820214246211684/cfd97533e4d21a8f8c1af7d17a1f0902.gif");
      embed.setColor(0xf04747);
      message.channel.send(embed); 
      const repembed = new Discord.MessageEmbed();
      repembed.setAuthor(`Получен запрос! Рассмотрите данный репорт!`, "https://i.imgur.com/454Gq7z.gif");
      repembed.addField("Сервер:", `${message.guild.name}`)
      repembed.addField("Отправитель:", `${message.author.tag}`)
      repembed.addField("Содержание:", `${message.content.split(" ").slice(1).join(" ")}`)
      repembed.setColor("#2f3136");
      repembed.setThumbnail(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }));
      repembed.setTimestamp();
      repembed.setFooter(`${message.guild.id} `);
      Reported.send("<@&710838156630556744>", repembed);
    
          
      if (talkedRecently.has(message.author.id)) {
        message.channel.send("Wait 1 minute before getting typing this again. - " + message.author);
} else {

       // the user can type the command ... your command code goes here :)

    // Adds the user to the set so that they can't talk for a minute
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(message.author.id);
    }, 60000);
}    

          usedCommand.add(message.author.id);
          setTimeout(() => {
              usedCommand.delete(message.author.id);
          }, 60000); 
      }



module.exports.help = {
  name: "report"
}
