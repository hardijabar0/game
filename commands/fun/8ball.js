const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
	name: "8ball",
	category: "fun",
  	description: "returns a response based on your question",
  	run: async (client, message, args) => {
		
		if (!args[0]) return message.channel.send('You need to ask a question.');
		const question = args.join(' ');
		const ask = await neko.sfw['8Ball']({ text: question });
		const embed = new MessageEmbed()
			.setColor("RANDOM")
			.setTitle(ask.response)
			.setImage(ask.url)
		message.channel.send(embed);
	}
};
