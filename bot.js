const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.user.setActivity("with depression", {
  type: "STREAMING",
  url: "https://www.twitch.tv/monstercat"
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
