//--by-NF5--//

const Discord = require("discord.js")


module.exports = {
 name:'delete',
execute: async(bot, message, args) => {
    let namechannel = args.slice(1).join(" ")
    if (message.deletable) message.delete();
    message.guild.channels.cache.forEach(salon => {
        if(!namechannel) return message.channel.send("Veuillez saisir un nom de channel à delete")
        if(salon.name === `${namechannel}`)
        salon.delete()
    })
}
}