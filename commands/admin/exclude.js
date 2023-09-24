const { SlashCommandBuilder } = require('discord.js');
const { userIsAllowedToExec } = require.main.require('./helpers/@exclude/check');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('exclude')
		.setDescription('Exclude user from using commands')
        .addStringOption(option => 
            option.setName('user')
                .setDescription('use @username')
                .setRequired(true))
        .addStringOption(option => 
            option.setName('commands')
                .setDescription('separate commands with commas')
                .setRequired(true)),
	async execute(interaction) {
        if (userIsAllowedToExec(interaction.user.id, interaction.commandName)) {
            // WIP;

            await interaction.reply({ content: `Command exclusion successfully added to user: ${interaction.options.getString('user')}`, ephemeral: true});
        } else {
            await interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
        }
	},
};