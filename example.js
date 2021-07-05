require("discordjs-activity")//Import first
const { Client } = require("discord.js")
const client = new Client()

client.on("message", async (message) => {
    if(message.author.bot)return
    if(message.content === "youtube"){
        let VoiceChannel = client.channels.cache.get("Voice Channel ID")//Voice Channel ID
        let Invite = await VoiceChannel.activityInvite("755600276941176913")//Application ID
        message.channel.send("https://discord.com/invite/"+Invite.code)// send's invite link in the channel
    }
})

client.login("Super secret token")