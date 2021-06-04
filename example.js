const { Client } = require("discord.js")
const client = new Client()
require('discordjs-activity')
client.on("message", async (message) => {
    if(message.author.bot)return
    if(message.content === "youtube"){
        let VoiceChannel = client.channels.cache.get("Voice Channel ID")//Voice Channel ID
        let Invite = await VoiceChannel.activityInvite("755600276941176913")//Application ID
        //For more application IDs you can check ReadMe
        message.channel.send("https://discord.com/invite/"+Invite.code)
    }
})

client.login("Super Secret Token")
