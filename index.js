//Single File package xD
const { Structures } = require('discord.js');
const fetch = require("node-fetch")

Structures.extend('VoiceChannel', VoiceChannel => {
  class EpicVoiceChannel extends VoiceChannel {
    constructor(client, data) {
      super(client, data);
    }

    activityInvite(InviteID){
        return new Promise(res => {
            let fetched = fetch(`https://discord.com/api/v8/channels/${this.id}/invites`, {
                    method: 'POST',
                    body: JSON.stringify({
                    max_age: 86400,
                    max_uses: 0,
                    target_application_id: InviteID,
                    target_type: 2,
                    temporary: false,
                    validate: null
                }),
                headers: {
                    "Authorization": `Bot ${this.client.token}`,
                    "Content-Type": "application/json"
                }
            }).then(response => response.json())
            res(fetched)
        })
    }
  }
  return EpicVoiceChannel;
});