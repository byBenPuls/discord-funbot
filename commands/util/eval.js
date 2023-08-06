const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {


  function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
        if (message.author.id !== "516644003186343939") return;
        try {
          const code = args.join(" ");
          let evaled = eval(code) || "✅ successfully! \n \n • ping: " + bot.ws.ping;
    
          if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
    
          message.channel.send({
            embed: {
              color: 11253955,
              description: `\`УСПЕШНО\` \`\`\`xl\n${clean(evaled)}\n\`\`\``,
              footer: {
                text: "© FunBot"
              }
            },
            code: "xl"
          });
          message.delete();
        } catch {
          message.channel.send({
            embed: {
              color: 11253955,
              description: `\`ОШИБКА\` \`\`\`xl\n${clean(err)}\n\`\`\``,
              footer: {
                text: "© FunBot"
              }
            }
          });
        }
    }

module.exports.help = {
  name: "eval"
}