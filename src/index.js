const Discord = require('discord.js');

const client = new Discord.Client();

const commandHandler = require('./commands/indexCommands');

// destructure BOT_TOKEN from our config file
const { BOT_TOKEN } = require('./config');

// this gets printed out once when the discord bot starts
client.once('ready', () => {
  // eslint-disable-next-line no-console
  console.log('Hello I am ready! 🤖');
});

// use our command handler to handle messages
client.on('message', commandHandler);

// using a .env file to store in the bot token
client.login(BOT_TOKEN);
