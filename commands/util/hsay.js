const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {

  var hookArgs = message.contetn.slice("/" + length + 4).split(";");
function hook(channel, title, message, color, avatar) {
    if (!channel) return console.log("Channel not specified.");
    if (!title) return console.log("Title not specified.");
    if (!message) return console.log("Message not specified.");
    if (!color) color = "d9a744";
    if (!avatar) avatar = "https://i.imgur.com/NBOZMpo.png";
  
    color = color.replace(/\s/g, "");
    avatar = avatar.replace(/\s/g, ""); 
  
    channel.fetchWebhooks().then(webhook => {
      let foundHook = webhook.find(user => user.name === "Webhook");
  
      if (!foundHook) {
        channel
          .createWebhook("Webhook", "https://i.imgur.com/NBOZMpo.png")
          .then(webhook => {
            webhook
              .send("", {
                username: title,
                avatarURL: avatar,
                embeds: [
                  {
                    color: parseInt(`0x${color}`),
                    description: message
                  }
                ]
              })
              .catch(error => {
                return channel.send(
                  "**Что-то пошло не так при отправке webhook.**"
                );
              });
          });
      } else {
        foundHook
          .send("", {
            username: title,
            avatarURL: avatar,
            embeds: [
              {
                color: parseInt(`0x${color}`),
                description: message
              }
            ]
          })
          .catch(error => {
            console.log(error);
            return channel.send("**Что-то пошло не так при отправке webhook.**");
          });
      }
    });
  };

  if (!message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send(
      "Недостаточно прав для использования этой команды! \nНеобходимо право: **Администратор** "
    );
    return;
  }
  message.delete();

    return hook(
      message.channel,
      "Редактор Webhook",
      "/hsay <Название вебхука>; <Сообщение>; [[HEXcolor](https://www.color-hex.com/) без #]; [avatarURL]\n\n**`< >` обязательный аргумент\n`[ ]` необязательный аргумент** \n \n • Перед использованием команды воспользуйтесь туториалом [нажимай](https://www.youtube.com/watch?v=Sfk19_Ax_7I&t=57s) \n • WebHook поддерживает систему [Markdown](https://gist.github.com/Almeeida/41a664d8d5f3a8855591c2f1e0e07b19) \n • Гиперссылка создаётся так `[название](ссылка с https://)` \n • Символ `;` разделяет название от текста и т.д. \n • Вам не нужно создавать WebHook, бот сам всё сделает",
      "FC8469",
      "https://cdn4.iconfinder.com/data/icons/global-logistics-3/512/129-512.png"
    ); // Remeber that \n means new line. This is also using a custom HEX id, and an image.

    hook(message.channel, hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]);

}


  

module.exports.help = {
    name: "hsay"
  }