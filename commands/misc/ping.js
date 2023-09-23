const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(cmdExecComponents) {
		const interaction = cmdExecComponents.interaction;

		await interaction.reply('Pong!');
	},
};