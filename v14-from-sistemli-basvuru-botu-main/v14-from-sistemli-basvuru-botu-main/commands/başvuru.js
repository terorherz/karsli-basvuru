const { EmbedBuilder, ButtonBuilder, ActionRowBuilder } = require("discord.js");
const config = require("../setting/config.js");

exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("Administrator")) return message.channel.send({ content: `${message.author} bu komutu kullanmak için \`Administrator\` yetkisine sahip olmalısın.`})
    const basvuruembed = new EmbedBuilder()
    .setAuthor({ name: `${message.guild.name} Karsli Partner Başvurusu`})
    .setColor("Random")
    .setFooter({ text: `${config.Footer}`})
    .setThumbnail(message.guild.iconURL())
    .setDescription("Karsli Packs sunucunda Partner olmak istiyorsanız yapmanız gereken soruları doğru şekilde cevaplamanızdır.")

    const basvurubuton = new ButtonBuilder()
    .setCustomId("basvuru_buton")
    .setLabel("Başvuru Yap")
    .setStyle(3)

    const row3 = new ActionRowBuilder()
    .addComponents(basvurubuton)
    
    message.channel.send({ embeds: [basvuruembed], components: [row3]})

};
exports.conf = {
  aliases: ["başvur"]
};

exports.help = {
  name: "başvuru"
};