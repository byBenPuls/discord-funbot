const Discord = require('discord.js')
const fs = require('fs-extra')

exports.run = async (client, message, args) => {
      let srole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
        let orole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
        if(!srole[message.guild.id]) {
            const embed = new Discord.MessageEmbed()
                .setDescription(`Вы не можете выполнить сброс, потому что вы не установили Автороль!`)
                .setColor("RED")
                .setTimestamp('Установить /autorole @роль')
            message.channel.send({embed})
            return
        }
        delete srole[message.guild.id]
        fs.writeFile("./autorole.json", JSON.stringify(srole), (err) => {
            console.log(err)
        })
        const embed = new Discord.MessageEmbed()
            .setDescription(`Автороль успешно сброшена`)
            .setColor("RANDOM")
            .setTimestamp()
        message.channel.send({embed})
        return
    }

module.exports.help = {
  name: "rautorole"
}

