
let status = [
  {
    name: 'Insert name',
    type: ActivityType.Streaming,
    url: 'null',
  },
  {
    name: 'Insert name',
  },
  {
    name: 'Insert text',
    type: ActivityType.Watching,
  },
  {
    name: 'Insert text',
    type: ActivityType.Listening,
  },
];

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);
});

require('./bot.js');
