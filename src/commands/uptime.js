const countdown = require('countdown');

const bootTime = new Date();

module.exports = async msg => {
  await msg.channel.send(
    `one-one has been up since ${bootTime.toUTCString()} for a total of: ${countdown(
      bootTime,
    )}`,
  );
  // eslint-disable-next-line no-console
  console.log('sent uptime master');
};
