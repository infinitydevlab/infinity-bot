
// Pull dot env file
require('dotenv').config();

version = require('./package.json').version;

// Dependencies
const fs = require('fs');
const discord = require('discord.js');
const { Client, Intents, DiscordAPIError } = require('discord.js');
const client = new Client({
  intents: [
	Intents.FLAGS.GUILDS, 
	Intents.FLAGS.GUILD_MESSAGES, 
	Intents.FLAGS.GUILD_MEMBERS, 
	Intents.FLAGS.GUILD_PRESENCES,
	Intents.FLAGS.GUILD_MESSAGE_REACTIONS
	]
});




client.commands = new discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
const eventsFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));
for(const file of eventsFiles){
   let command = require(`./events/${file}`)
  client.commands.set(command.name,command )
  }

for(const file of commandFiles){
let command = require(`./commands/${file}`)
client.commands.set(command.name,command )
}
// Events  

client.on('ready', () => {
  client.commands.get('initial').execute(client);
  console.log(`[✓] ${process.env.BOT_NAME} está online`);
});



client.on('messageCreate', async message => {
  client.commands.get('msg_send').execute(client, message);
});

client.on('messageCreate', async message => {
  client.commands.get('replyAjuda').execute(client, message);
});


client.on('messageCreate', async message => {
  let messageArray = message.content.split(' ');
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

 if(cmd === '.say'){
  client.commands.get('say').execute(message,args)
 }

 if(cmd === '.sugerir'){
  client.commands.get('sugerir').execute(client,message,args)
 }

 if(cmd === '.hello'){
	client.commands.get('hello').execute(message)
 }

 if(cmd === ".apresentar"){
	client.commands.get("apresentar").execute(message)
 }

});

client.login(process.env.BOT_TOKEN).then(()=>{
  console.log(`[✓] ${process.env.BOT_NAME} authenticado com sucesso!`)
});
console.log(`[◌] Iniciando ${process.env.BOT_NAME}...\n ----------------`);
