const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'YOUR-TOKEN-HERE';
const prefix = 'link!';

bot.on('ready', () => {
    console.log('You bot is now online.')
    bot.user.setActivity('Frederiks hygge server', { type: "LISTENING"})
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
    bot.user.setStatus('dnd')
        .then(console.log)
        .catch(console.error);
})

bot.on("message", message => {
    if(message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLocaleLowerCase();

    if(command === 'invite') {
        message.channel.send('**Invite folk til serveren med at skrive:**  https://discord.gg/6jgVe5g')
    } else
    if(command === 'website') {
        message.channel.send('https://www.frederiks-hygge-server.net/')
    }
})

bot.login(token);
