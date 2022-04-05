//--by-NF5--//

const Discord = require('discord.js')

module.exports = {
 name: "invite",
execute: async(bot, message, args) => {
 let inviteembed = new Discord.MessageEmbed()
    .setTitle("Bot Invite")
    .setColor('2f3136')
    .setDescription(`[Lien d'invite du bot](https://discord.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot)`)
    message.channel.send(inviteembed)
}
}