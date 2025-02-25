   const {client , ActivityType} = require ('discord.js');
    client.on('ready', () => {
    let serverCount = client.guilds.cache.size;
    client.user.setStatus('dnd') // idle online dnd invisible
            console.log(`🟢 | Ready! Logged in as ${client.user.tag} , My ID : ${client.user.id}`);
         let activities = [ `Dev : 72.20!`, `${client.guilds.cache.size} servers im in`, `WICK STUDIO` ], i = 0;  // ممكن تحط اكتر من دول 
        setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Watching }),  4000);//تقدر تغيرها Playing - Streaming - Listening
    })
