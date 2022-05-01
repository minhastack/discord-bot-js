try {
    require('dotenv').config();
}catch (e) {
    
    console.log('in production...');

} finally {

    const GenRandomMessage = require('./modules/randomMessage/randomMessages');
    const {MessageEmbed} = require('discord.js');

    module.exports = async (client, member) => {

        const discordServer = client.guilds.cache.get(process.env.DISCORD_SERVER_ID);
        const channel = client.channels.cache.get(process.env.DISCORD_CHANNEL_ID);

        if (member.guild == discordServer) {

            const username = member.user.username;
            const profilePicUrl = member.user.displayAvatarURL({
                dynamic: true,
                format: 'png',
                size: 1024
            });
            const message = await new GenRandomMessage(username).getRandomMessage();

            const embed = new MessageEmbed({
                title: ':partying_face: Opa!! :partying_face:', // lar
                description: message,
                thumbnail: {
                    url: profilePicUrl
                },
                color: "#6a0bd9",
                footer: {
                    text: 'Bem vindo ao servidor! Sinta-se à vontade para apresentar suas ideias e quem você é!'
                }
            });

            const parseEmbed = embed.toJSON();
            channel.send({
                embeds: [parseEmbed]
            });
        }
    }

}