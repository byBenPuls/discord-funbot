const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");


module.exports.run = async (bot, message, args) => {
        const name = args.join(" ");

        if (!name) {
            return message.channel.send("Вы не указали пользователя!!")
                .then(m => m.delete({timeout: 5000}));
        }

        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch {
            return message.channel.send("Я не смог обнаружить пользователя!")
                .then(m => m.delete({timeout: 5000}));
        }

        const account = res.graphql.user;

        const embed = new MessageEmbed()
            .setColor("#599BE5")
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Информация о профиле", stripIndents`**- Имя:** ${account.username}
            **- Полное имя:** ${account.full_name}
            **- Описание:** ${account.biography.length == 0 ? "Нету" : account.biography}
            **- Постов:** ${account.edge_owner_to_timeline_media.count}
            **- Подписчиков:** ${account.edge_followed_by.count}
            **- Подписок:** ${account.edge_follow.count}
            **- Приватный аккаунт:** ${account.is_private ? "Да 🔐" : "Нет 🔓"}`);

        message.channel.send(embed);
    }


module.exports.help = {
    name: "instagram",
}