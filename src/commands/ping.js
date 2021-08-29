module.exports = async msg => {
  await msg.channel.send('pong');
  // eslint-disable-next-line no-console
  console.log('sent PONG!');
};
