<div align="center">
  <h1>discordjs-activity</h1>
  <p>An simple package to create an Activity in Discord Voice Channel using Discord.js</p>
  <p>
    <a href="https://www.npmjs.com/package/discordjs-activity"><img src="https://img.shields.io/npm/v/discordjs-activity?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/discordjs-activity"><img src="https://img.shields.io/npm/dt/discordjs-activity?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/discordjs-activity"><img src="https://nodei.co/npm/discordjs-activity.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>
<div align="center">
  <img src="https://media.discordapp.net/attachments/749254970003423345/849884191474057237/YPNTiGwhTl0AAAAASUVORK5CYII.png">
  <br>
</div>

## 📂 | Installation
```sh
npm install discordjs-activity
# (or)
yarn add discordjs-activity
```

## 📜 | Setup
```js
const { Client } = require("discord.js")//Importing client
const client = new Client()//creating a new discord.js client
require("discordjs-activity")(client)//Importing this package and initiating it with the client
```

## ✍ | Examples
```js
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
```
All of our Examples and activites are in [examples.js](https://github.com/SudhanPlayz/discordjs-activity/blob/main/examples.js)
If you have any other problems/questions, you can join our [Support Server!](https://discord.gg/a9SHDpD)

## ✨ | Application IDs
### Poker Night
Client ID: `755827207812677713`
![](https://cdn.discordapp.com/attachments/749254970003423345/849889747794657290/unknown.png)
### Betrayal.io
Client ID: `773336526917861400`
![](https://media.discordapp.net/attachments/749254970003423345/849891725144752178/unknown.png)
### YouTube Together
Client ID: `755600276941176913`
![](https://media.discordapp.net/attachments/749254970003423345/849889254327058442/unknown.png)
### Fishington.io
Client ID: `814288819477020702`
![](https://cdn.discordapp.com/attachments/749254970003423345/849892686160592937/unknown.png)
#### Even more coming soon

<br>
<br>

## 👥 | Support Server
<p align="center" style="text-align: center;">
  <a href="https://youtube.com/CodingWithSudhan?sub_confirmation=1"><img src="https://raw.githubusercontent.com/MikeCodesDotNET/ColoredBadges/master/png/streaming/youtube%402x.png"></a>
  <a href="https://discord.gg/a9SHDpD"><img src="https://discord.com/api/guilds/749254969537986640/widget.png?style=banner2"></a>
</p>