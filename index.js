
const TelegramBot = require('node-telegram-bot-api');
const { TOKEN } = process.env;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', (msg) => {
    console.log(msg.chat.id)
    bot.sendMessage(msg.chat.id, msg.chat.id)
});