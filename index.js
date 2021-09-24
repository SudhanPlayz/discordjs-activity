//Single File package 
const { Structures, Invite } = require('discord.js');
const fetch = require("node-fetch")



Structures.extend('VoiceChannel', VoiceChannel => {
  return class EpicVoiceChannel extends VoiceChannel {
    constructor(client, data) {
      super(client, data);
      this.applications = {
        "youtube_together": "755600276941176913",
        "fishington": "814288819477020702",
        "chess_in_the_park": "832012774040141894",
        "chess_in_the_park_dev": "832012586023256104",
        "betrayal": "773336526917861400",
        "poker_night": "755827207812677713"
      }
    }

    /**
     * Creates Activity Invite in the voice channel
     * @param {string} Application - Application
     * @returns {Invite}
     */
    activityInvite(application) {
      return new Promise(res => {
        let fetched = fetch(`https://discord.com/api/v8/channels/${this.id}/invites`, {
          method: 'POST',
          body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: this.applications[application]?this.applications[application]:application,
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
});
