require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (
    message.channel.id === process.env.SOURCE_CHANNEL &&
    !message.author.bot
  ) {
    const targetChannel = client.channels.cache.get(process.env.TARGET_CHANNEL);
    if (targetChannel) {
      targetChannel.send(`📢 Forwarded from #price-alert:\n${message.content}`);
    }
  }
});

client.login(process.env.BOT_TOKEN);
