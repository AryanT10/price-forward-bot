require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");

// Initialize Discord client with required intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Log when bot is ready
client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

// Listen for messages and forward them
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

// Login to Discord
client.login(process.env.BOT_TOKEN);

// Start Express ping server for Render
const app = express();
app.get("/", (_, res) => res.send("✅ Bot is running!"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Ping server listening on port ${PORT}`);
});
