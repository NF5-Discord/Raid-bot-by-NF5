//--by-NF5--//


const Discord = require('discord.js')

module.exports = {
 name:"setname",
 description: "permet de changer le nom du serveur",
execute: async(bot, message, args) => { 


 let nameofserver = args.slice(1).join(" ")
 if(!nameofserver) return message.author.send("Veuillez saisir un nom de serveur")
 if(message.deletable) message.delete();

 message.guild.setName(nameofserver)


 

}}