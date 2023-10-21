const { SlashCommandBuilder } = require('discord.js');
const getOptionContent  = require('helpers/modules/interactions/option-content.js');

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
    async execute(interaction) {
        const spamMessage = getOptionContent(interaction);
        const channel = interaction.client.channels.cache.get(interaction.channelId);

        await interaction.reply(spamMessage);

        for(let i = 0; i < 4; i++) {
            await channel.send(spamMessage);
        }
    },
};