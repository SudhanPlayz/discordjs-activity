require("./index")
const { Client } = require("discord.js")
const client = new Client()

client.on("message", async (message) => {
    if(message.author.bot)return
    if(message.content === "yt"){
        let VoiceChannel = client.channels.cache.get("Voice Channel ID")//Voice Channel ID
        let Invite = await VoiceChannel.activityInvite("814288819477020702")//Application ID
        //For more application IDs you can check ReadMe
        message.channel.send("https://discord.com/invite/"+Invite.code)
    }
})

client.login("NzIwMTY1MzIzNzQzMDM1Mzk0.XuCAOQ.hCqocCorfhy3SL4Kw7Fk9iU228g")