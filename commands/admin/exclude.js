const { SlashCommandBuilder } = require('discord.js');
const { sanitizeInputs, addToExclusionList } = require('helpers/@exclude/functions');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('exclude')
		.setDescription('Exclude user from using commands')
        .addStringOption(option => 
            option.setName('user')
                .setDescription('use: username -or- @username')
                .setRequired(true))
        .addStringOption(option => 
            option.setName('commands')
                .setDescription('separate commands with commas')
                .setRequired(true)),
	async execute(interaction) {
        if (interaction.member.permissions.has('ADMINISTRATOR')) {
            let commitObject = sanitizeInputs(
                interaction.options.getString('user'),
                interaction.options.getString('commands'),
                interaction.member.guild
            );
    
            commitObject.commands.forEach(element => {
                if (element != "all")
                    if (!interaction.client.commands.find(command => command.data.name === element))
                        commitObject.commands = commitObject.commands.filter((item) => item !== element);
            });
    
            if (commitObject.userId instanceof Promise) {
                commitObject.userId.then(response => {
                    (response) ? commitObject.userId = response.user.id : commitObject.userId = undefined;
                    addToExclusionList(commitObject, interaction);
                })
            } else {
                addToExclusionList(commitObject, interaction);
            }
        } else {
            await interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
        }
	},
};