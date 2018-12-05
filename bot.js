const Discord = require("discord.js");
const client = new Discord.Client();
var adminprefix = "#";
const developers = ["455904010810032145","323888904602124299"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setggggg')) {
    client.user.setGame(argresult);
      message.channel.send(`**تم تغيير حالتك الى** **${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setwgggg')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**تم تغيير الواتشنق الى** **${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setlggg')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**تم تغير اللستنق الى ** **${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**تم تغيير الستريمنق الى** **${argresult}**`)
  }
  if (message.content.startsWith(adminprefix + 'setnamgggge')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**تم تغيير اسمك الى ** ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setggggava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**تم تغيير صورتك الى**:**${argresult}** `);
}
});








client.login(process.env.BOT_TOKEN);
