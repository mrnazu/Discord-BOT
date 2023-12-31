//Importing the discord.js module
const discord = require('discord.js');
require('dotenv').config();

//Creating a new client
const client = new discord.Client({
    intents: ['Guilds', 'DirectMessages', 'GuildMessages'],
    partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER']
});

//Bot is online now
try {
    const connect = async function () {
        await client.login(process.env.TOKEN)
            .then(client.on('ready', function (client) {
                console.log(`The "${client.user.username}" is Online!`);
            }));
    }
    connect();
} catch (error) {
    console.log(`The "${client.user.username}" is NOT Online!'n${error}`);
}

//Let's write a message
client.on('messageCreate', function (message) {
    message.reply('Hello');
});

