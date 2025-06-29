# 🤖 PriceForwardBot

I was bored. So I made a bot.

Basically, this little bot sits in a **big Discord server** (you know, the ones with like 500k people spamming every 3 seconds), and **sneakily forwards price update messages** to my own private server.

Why? Because the big server doesn’t allow push notifications 😭  
So I built my own private alert system instead.

---

## 🙃 Why I Did This

I joined this huge Discord server for deals — but they disabled push notifications (probably to avoid frying everyone’s phones).

> So instead of manually scrolling through noise, I thought:

> "What if I just built my own personal bot butler that follows price updates and sends them to me directly?"

So yeah... I did that.

---

## 🧠 What It Does

- Listens like a ninja 🥷 in a **source channel**
- Forwards messages into your **target channel** (your chill, quiet zone)
- Runs 24/7 thanks to free hosting (Render) and caffeine (UptimeRobot)
- Ignores other bots because... bots should mind their own business

---

## 🧪 Tech Stack

- `Node.js` – JavaScript but with more crying
- `discord.js` – makes talking to Discord API feel like texting
- `express` – keeps the bot alive on Render
- `Render` – free hosting because we don’t pay for stuff we can automate
- `UptimeRobot` – pings the bot so it doesn’t nap forever

---

## 🛠 How to Set It Up (if you're also too online)

### 1. Clone This Thing

```bash
git clone https://github.com/yourusername/price-forward-bot.git
cd price-forward-bot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a .env file

```bash
BOT_TOKEN=your_discord_bot_token
SOURCE_CHANNEL=channel_id_where_deals_happen
TARGET_CHANNEL=channel_id_where_you_want_them
```

Turn on Developer Mode in Discord → right-click a channel → Copy ID

### Run It Locally (Just for fun)

```bash
node index.js
```

### OR Deploy to Render (Forever-Free Plan)

1. Push your code to GitHub

2. Log in to Render
3. Create a Web Service
4. Set:
   • Build Command: npm install
   • Start Command: node index.js
5. Add environment variables:
   • BOT_TOKEN
   • SOURCE_CHANNEL
   • TARGET_CHANNEL

### keep it awake with UpTimeRobot

Render naps when it’s bored.

So I added UptimeRobot to ping the bot every 5 minutes.

"Yoo stay awake !!"

Use your Render URL to mintor it ;) thats all..
