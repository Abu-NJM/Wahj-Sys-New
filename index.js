const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();

// نظام وهمي عشان ريندر ما يطفي البوت
app.get('/', (req, res) => res.send('Wahj Bot is Running! ✨'));
app.listen(3000);

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

// إعدادات البوت
const LINE_CHANNEL_ID = "1470191031768191077"; 
const LINE_URL = "https://discord.com/channels/1407553185194971166/1470191031768191077/1487342290681860210";

client.on('ready', () => {
    console.log(`✅ البوت شغال باسم: ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    // نظام الخط التلقائي
    if (message.channel.id === LINE_CHANNEL_ID) {
        message.channel.send(LINE_URL).catch(() => null);
    }
});

client.login(process.env.TOKEN);