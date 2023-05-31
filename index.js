const Discord = require("discord.js");
const { Intents } = require("discord.js");
const client = new Discord.Client({ intents: [Intents.Flags] });
require("dotenv").config();

client.on("ready", () => {
  console.log(`📡 Bot ${client.user.username} iniciado!`);
  client.user.setStatus("online");
});

client.login(process.env.TOKEN);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

// Handlers _______________________________________

client.on("interactionCreate", async (interaction) => {
  if (interaction.type === Discord.InteractionType.ApplicationCommand) {
    const cmd = client.slashCommands.get(interaction.commandName);

    if (!cmd) return interaction.reply(`Error`);

    interaction["member"] = interaction.guild.members.cache.get(
      interaction.user.id
    );

    cmd.run(client, interaction);
  }
});

client.slashCommands = new Discord.Collection();

require("./handler")(client);