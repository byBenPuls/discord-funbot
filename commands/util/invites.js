const  arraySort  = require("array-sort");
const Discord = require("discord.js");
const table = require("table")

module.exports.run = async (bot, message, args) => {

let invites = await message.guild.fetchInvites().catch(error => {
    return message.channel.send("У меня недостаточно прав для просмотра приглашений!")
})

invites = invites.array();

arraySort(invites, 'uses', { reverse: true });


let possibleInvites = [['User', 'Uses']]
invites.forEach(function(invite) {
    possibleInvites.push([invite.inviter.username, invite.uses])
})
 
const embed = new Discord.MessageEmbed()
    .setColor(0x7289da)
    .setTitle("Server Invites")
    .addField("Лидеры", `\`\`\`${table.table(possibleInvites)}\`\`\``)

    message.channel.send(embed);
}


module.exports.help  = {
    name: "invites"
}
