// importing the discord.js module
const discord = require('discord.js');
require('dotenv').config();

// creating a new client
const client = new discord.Client({
    intents: ['Guilds', 'DirectMessages', 'GuildInvites', 'GuildMessageReactions'], 
    partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER']
});


client.login(process.env.TOKEN);