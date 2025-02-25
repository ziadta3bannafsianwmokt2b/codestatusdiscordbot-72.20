   const {client , ActivityType} = require ('discord.js');
    client.on('ready', () => {
    let serverCount = client.guilds.cache.size;
    client.user.setStatus('dnd') // idle online dnd invisible
            console.log(`🟢 | Ready! Logged in as ${client.user.tag} , My ID : ${client.user.id}`);
         let activities = [ `Dev : 72.20!`, `${client.guilds.cache.size} servers im in`, `WICK STUDIO` ], i = 0;  // ممكن تحط اكتر من دول 
        setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Watching }),  4000);//تقدر تغيرها Playing - Streaming - Listening
    })
console.log(`
                     .___         ___.                  _________ ________        ________  _______   
  _____  _____     __| _/  ____   \_ |__   ___.__.  /\  \______  \\_____  \       \_____  \ \   _  \  
 /     \ \__  \   / __ | _/ __ \   | __ \ <   |  |  \/      /    / /  ____/        /  ____/ /  /_\  \ 
|  Y Y  \ / __ \_/ /_/ | \  ___/   | \_\ \ \___  |  /\     /    / /       \       /       \ \  \_/   \
|__|_|  /(____  /\____ |  \___  >  |___  / / ____|  \/    /____/  \_______ \  /\  \_______ \ \_____  /
      \/      \/      \/      \/       \/  \/                             \/  \/          \/       \/ 
`);
console.log('your bot is ready!');
console.log('code by 72.20');
console.log (`Discord id >> 877717735801487360`)
console.log(`progarmming >>  discord.gg/witon
services >> discord.gg/wick-s
community >> discord.gg/wick-c
wicks support >> discord.gg/kcz9VEBHp5`)
