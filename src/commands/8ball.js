const eightBall = [
  'It will remain an endless search devoid of all meaning.',
  'That door is impossible to open.',
  'Yes!',
  "I 'unno.",
  'The answer will probably be disappointing...',
  "You're in kind of a bad place right now.",
  'Mmmmmm... Yes?',
  'Sure. Why not?',
  'The sun is going to burn out one day. Enjoy this while you can.',
  "That's a lot of maybes.",
];

module.exports = async (msg, args) => {
  if (!args.length) return;
  const i = Math.floor(Math.random() * eightBall.length);
  const reply = eightBall[i];
  await msg.channel.send(`${msg.author} ${reply} 🎱`);
};
