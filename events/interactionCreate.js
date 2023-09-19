const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return; // n'inclus pas les interaction textuelles ( envoi de messages dans le salons )

		const command = interaction.client.commands.get(interaction.commandName); // Récupération de la commande du / command

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

        

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}
	},
};
