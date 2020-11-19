const Discord = require('discord.js');
const client = new Discord.Client()


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.content.startsWith('discord.gg')) {
    const user = msg.author
    msg.member.ban(user)
    msg.channel.send("${user} has been banned, you are not allowed to send invites in this guild!");
  }
})

client.login('token');
