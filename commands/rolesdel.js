//--by-NF5--//


const Discord = require('discord.js')

module.exports = {
 name:"rolesdel + <nom des roles créer>",
execute: async(bot, message, args) => {
  if (message.deletable) message.delete();
  let name = args.slice(1).join(" ")
  if(!name) return message.author.send("Veuillez saisir un nom de roles à supprimer")

 message.guild.roles.cache.forEach(roles => {
  if(roles.name === `${name}`)
  roles.delete()
})

}}