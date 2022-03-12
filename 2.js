const mineflayer = require('mineflayer');
var options = {
  host: 'motherland.ploudos.me',
  port: 25565,
  username: 'Bot',
};

var bot = mineflayer.createBot(options);

bot.on('spawn', () => { console.log("- Spawned -")
  console.log("- Listening for messages -")
  for (const player of Object.values(bot.players)) {
    console.log("- Player " + player.displayName + " connected -")
  }
});