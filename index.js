const Discord = require('discord.js');
const client = new Discord.Client()


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.content.startsWith('discord.gg')) {
    const user = msg.author
    msg.member.ban(user)
    msg.channel.send("${user} a fost banat, nu ai voie sa trimit invite uri!");
  }
})

client.login('Nzc4NTc1NTY3MDU3NzE1MjAw.X7T_AA.NlQT_g81GYZMoNzzvysi65JHP6s');
