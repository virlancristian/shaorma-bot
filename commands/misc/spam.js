const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spam')
        .setDescription('Spam a message')
        .addStringOption(option => 
            option
                .setName('message')
                .setDescription('-'))
        .addAttachmentOption(option =>
            option.setName('photo')
            .setDescription('-')),
    async execute(cmdExecComponents) {
        const interaction = cmdExecComponents.interaction;
        const client = cmdExecComponents.client;

        const spamMessage = getOptionContent(interaction);
        const channel = client.channels.cache.get(interaction.channelId);

        await interaction.reply(spamMessage);

        for(let i = 0; i < 4; i++) {
            await channel.send(spamMessage);
        }
    },
};

//If the message option was chosen, return the written message.
//If the photo option was chosen, return the photo url
function getOptionContent(interaction) {
    const photo = interaction.options.getAttachment('photo');
    const message = interaction.options.getString('message');

    return photo != null ? photo.url : message;
}