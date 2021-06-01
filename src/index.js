const Discord = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new Discord.Client();
const guildID = '771553455151513630';
const channelID = '789597796646780938';

// this gets printed out once when the discord bot starts
client.once('ready', () => {
  console.log('Hello I am ready! 🤖');
});

client.on('message', async (msg) => {
  // moosic bot channel and personal server
  if (msg.guild.id === guildID && msg.channel.id === channelID) {
    // if the message has ping replies with pong
    if (msg.content.toLocaleLowerCase() === 'ping') {
      await msg.reply('pong');
      console.log('reply sent!');
    }
  }
  // console.log(msg);
});

// using a .env file to store in the bot token
client.login(process.env.BOT_TOKEN);
