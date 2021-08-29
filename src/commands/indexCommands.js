const ping = require('./ping');
const uptime = require('./uptime');
const eightBall = require('./8ball');

// all of our commands will go here, each will need their require statement like above
const commands = {
  ping,
  uptime,
  '8ball': eightBall,
};

// get the guild and channel id from our config file
const { GUILD_ID, BOT_CHANNEL_ID } = require('../config');

// only listening to messages sent in our server in our specific channel
module.exports = async msg => {
  if (msg.guild.id === GUILD_ID && msg.channel.id === BOT_CHANNEL_ID) {
    // if our commands will have stuff after the command we split via spaces
    const args = msg.content.split(' ');
    // we then check fo early returns
    if (args.length === 0 || args[0].charAt(0) !== '!') {
      return;
    }
    // get the actual command and then check if its include in our commands above
    // then invoke that command with the msg/args
    const command = args.shift().substr(1);
    if (Object.keys(commands).includes(command)) {
      commands[command](msg, args);
    }
  }
};
