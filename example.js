require("discordjs-activity")
const { Client } = require("discord.js")
const client = new Client()

client.on("message", (message) => {
    if(message.channel.author.bot)return
    if(message.content === "yt"){
        let VoiceChannel = client.channels.cache.get("Voice Channel ID")
        let Invite = VoiceChannel.activity.invite("755600276941176913")
        message.channel.send("https://discord.com/invite/"+Invite.code)
    }
})

client.login("super secret token")