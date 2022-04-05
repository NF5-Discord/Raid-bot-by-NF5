//--by-NF5--//

const Discord = require("discord.js")
const bot = new Discord.Client()
const { readdirSync } = require("fs")
const prefix = "="
const ascii = require('ascii-table')
let table = new ascii("Commands");
table.setHeading('Command', ' Load status');

bot.on('ready', () => {
    console.log(`${bot.user.username} est prêt pour le raid`)
    bot.user.setStatus("dnd");
    bot.user.setActivity(`BY NF5`, {
        type: "WATCHING"
    
})})

//--handler--//


bot.commands = new Discord.Collection();
const commands = readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
  const commandName = file.split(".")[0];

  const command = require(`./commands/${file}`);

  console.log('✅ -', file)


  bot.commands.set(command.name, command);

}


bot.on('message', async (message, guild) => {    


    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot ) return;
    if(message.channel.type === 'dm' ) return;


    let messageArray = message.content.split(" ")
    let cmd  = messageArray[0].slice(1).toLowerCase();  
    var args = message.content.substring(prefix.length).split(/ +/)
    let commandsFile = bot.commands.get(cmd.slice(prefix.lenght)) || bot.commands.find(a => a.aliases && a.aliases.includes(cmd))

            
    if(commandsFile) commandsFile.execute(bot, message, args);
 
  
})


bot.on('message', async message =>{
    if(message.content === `${prefix}end`) {
        bot.destroy();
    }
})



bot.on('message', async message =>{
    if(message.content === `${prefix}setpic`) {
        if(message.deletable) message.delete();
        message.guild.setIcon("https://cdn.discordapp.com/attachments/942179714494267423/942225688465920010/Screenshot_2.png")
        message.guild.setBanner("https://cdn.discordapp.com/attachments/942179714494267423/942225688465920010/Screenshot_2.png")
    }
})


bot.login("TOKEN BOT")