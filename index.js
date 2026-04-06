const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// البيانات اللي أرسلتها
const TOKEN = 'MTQ5MDU5NzcyMDYwNjM3NjAyNg.GvwYFY.9BerbxUTsZ6LmXsC12qgDjdjmteTVGLWxfuSPw';
const CHANNEL_ID = '1470191031768191077';
const LINE_IMAGE_URL = 'https://discord.com/channels/1407553185194971166/1470191031768191077/1487342290681860210';

client.once('ready', () => {
    console.log(`تم تشغيل البوت بنجاح باسم: ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    // التأكد أن الرسالة في الروم المحدد وأن اللي أرسلها مو البوت نفسه
    if (message.channel.id === CHANNEL_ID && !message.author.bot) {
        try {
            // إرسال الخط (الصورة)
            await message.channel.send({ content: LINE_IMAGE_URL });
        } catch (error) {
            console.error('حدث خطأ أثناء إرسال الخط:', error);
        }
    }
});

// تسجيل الدخول
client.login(TOKEN);
