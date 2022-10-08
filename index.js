const lib = require('lib')({token: process.env['token']});
const mySecret = process.env['dtoken']
const Client, GatewayIntentBits = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

client.on('ready', () => {
  console.log(`logged in!`)
})

client.on('messageCreate', (message) => {
  if (message.content == 'ping') {
    console.log(message)
    return lib.discord.channels['@0.3.2'].messages.create({
  channel_id: `860512303233236995`,
  content: `pong!`,
   message_reference: {
     message_id: message.id
   }
}); 
  } else {
    return;
  }
})
const {Client:ClashClient} = require('clashofclans.js');
const beast = new ClashClient() 

beast.events.addWars(['#2YVLLLL28','#2QLCCPQUR']);
beast.events.setWarEvent({
    name: 'clanDescriptionChange',
    filter: (oldWar, newWar) => {
        return oldWar.state !== newWar.state;
    }
});

beast.on('clanDescriptionChange', (oldWar, newWar) => {
    console.log(oldWar.state, newWar.state);
});
beast.events.addPlayers(['#PV0G8V8V8']);
beast.events.setPlayerEvent({
    name: 'playerChange',
    filter: (oldPlayer, newPlayer) => {
        return oldPlayer.warOptedIn !== newPlayer.warOptedIn;
    }
});

beast.on('playerChange', (oldPlayer, newPlayer) => {
    console.log(oldPlayer.warOptedIn, newPlayer.warOptedIn);
return lib.discord.channels['@0.3.2'].messages.create({
  channel_id: `860512303233236995`,
  content: `<@849123406477656086>`
})
});

(async function () {
	await beast.login({email:process.env.mail,password:process.env.pass})
    await beast.events.init();
})();


client.login(mySecret) 


