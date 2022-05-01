const {Router} = require('express');
const app = require('../app');

const discordBotToken = process.env.TOKEN;
const route = Router();


route.get('/', (req, res) => {
    const { Client, Intents } = require('discord.js');
   
    const client = new Client({ 
        intents: [
            Intents.FLAGS.GUILD_MESSAGES, 
            Intents.FLAGS.GUILDS, 
            Intents.FLAGS.GUILD_MEMBERS
        ] 
    });

    client.login(discordBotToken).then(()=>{
       
        client.on("guildMemberAdd", async member => app(client, member));
        client.on("ready", ()=> console.log('client is ready!'));
        
    });

});

module.exports = route;