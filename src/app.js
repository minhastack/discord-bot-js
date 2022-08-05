try {
    require('dotenv').config();
} catch (e) {

    console.log('in production...');

} finally {

    const GenRandomMessage = require('./modules/randomMessage/randomMessages');
    const { MessageEmbed } = require('discord.js');

    module.exports = async (client, member) => {

        const discordServer = client.guilds.cache.get(process.env.DISCORD_SERVER_ID);
        const channel = client.channels.cache.get(process.env.DISCORD_CHANNEL_ID);

        if (member.guild == discordServer) {

            const username = member.id;
            const profilePicUrl = member.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 });
            const message = await new GenRandomMessage(username).getRandomMessage();

            const embed = new MessageEmbed()
            .setTitle(':partying_face: Uhull!! :partying_face:')
            .setColor("#6a0bd9")
            .setFields({name: "Um presente...", value: "\n\n\nInsira o cupom abaixo na [nossa loja](https://shopee.com.br/minhastack?categoryId=100644&itemId=16403580069) e receba 5% OFF em qualquer produto :partying_face: \n\nMINH5OFF"})
            .setThumbnail(profilePicUrl)
            .setDescription(message);
            
            const parseEmbed = embed.toJSON();
            channel.send({embeds: [parseEmbed]});
        }
    }

}
