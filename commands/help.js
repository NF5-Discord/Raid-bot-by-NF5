//--by-NF5--//

const Discord = require("discord.js")
const prefix = "="

module.exports = {
 name:"help",
execute: async(bot, message, args) => {
 const user = message.author;

 if (message.deletable) message.delete();
 message.react("👍")

 message.reply("Regardez vos dm")

 let helpembed = new Discord.MessageEmbed()
 .addField("🧜‍♂️ - Commandes d'aides", "[Voici les commandes d'aides de Yako Protect](https://discord.com/channels/942499374527828039/942499374527828042/942505967118090350)")
 .setColor('BLUE')
 user.send(helpembed)
}
}