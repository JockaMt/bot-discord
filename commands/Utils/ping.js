const Discord = require("discord.js");

module.exports = {
  name: "ping",
  description: "[⚒️] Veja o ping do bot!",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    let info = new Discord.EmbedBuilder()
      .setColor("Fuchsia")
      .setDescription(`**O ping de ${interaction.user} é ${client.ws.ping}ms**`)
      .setFooter({ text: `Comando executado por ${interaction.user.tag}` })
      .setTimestamp();

    interaction.reply({ content: `Pong!`, embeds: [info] });
  },
};
