const fs = require ('fs-extra')
const Discord = require('discord.js')
var sautorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));


exports.run = async (bot, message, args) =>
{
      let profil = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  if (!mentionedChannel && args[0] !== "сброс") return message.channel.send("Вы должны указать роль. Если вы не можете пометить роль, не забудьте активировать опцию маркировки роли. Пример использования: `/autorole @role #welcome` \n Важное примечание !! Для автоматической роли у меня должна быть роль выше роли, иначе я не могу ее дать :)");
  if (message.guild.member(message.author.id).hasPermission(0x8))
    
    {
      var mentionedRole = message.mentions.roles.first();
      if (!mentionedRole) return message.channel.send("Укажите роль!")
      

    if(!profil[message.guild.id]){
    
        profil[message.guild.id] = {
      
            sayi: mentionedRole.id,
      kanal: mentionedChannel.id
        };
    }
    
    profil[message.guild.id].sayi = mentionedRole.id
  profil[message.guild.id].kanal = mentionedChannel.id
    
    fs.writeFile("./autorole.json", JSON.stringify(profil), (err) => {
        console.log(err)

    })

    const embed = new Discord.MessageEmbed()
        .setDescription(`Роль ${args[0]} успешно поставлена! \nКанал для оповещений: ${mentionedChannel}`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
}

}

module.exports.help = {
    name: "autorole"
}