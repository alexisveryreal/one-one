module.exports = async (msg) => {
  await msg.channel.send('pong');
  console.log('sent PONG!');
};
