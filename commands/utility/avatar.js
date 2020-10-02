const Discord = require("discord.js")

module.exports = {
    name: "avatar",
    category: "utility",
    description: "Gets the avatar of a user or yourself",
    usage: "[command | user] or [command]",
    run: async(client, message, args) => {

        //command

        /* If user isnt found it selects ur profile */
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;

        if (!user.avatarURL) return message.channel.send(`That user does not have an avatar`);

        const avatar = new Discord.MessageEmbed()
            .setTitle(`${user.username}'s Avatar`)
            .setColor("RANDOM")
            .setImage(user.avatarURL())
            .setURL(user.avatarURL())
        message.channel.send(avatar)
            // If bot doesnt have embed perms 
            .catch(() => message.channel.send('**Error:** Missing permission `Embed link` '));

    }

};
