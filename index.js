const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS] });
const app = require('./src/app');

const token = process.env.TOKEN;

client.login(token).then(()=>{
    
    client.on("guildMemberAdd", async member => app(client, member));
    
    client.on("ready", ()=> console.log('client is ready!'));
    
});

