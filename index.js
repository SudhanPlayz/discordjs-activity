//Single File package 
const { Structures, Invite } = require('discord.js');
const fetch = require("node-fetch")



Structures.extend('VoiceChannel', VoiceChannel => {
  return class EpicVoiceChannel extends VoiceChannel {
    constructor(client, data) {
      super(client, data);
      this.applications = {
        //put in the data for stable versions from https://gist.github.com/GeneralSadaf/42d91a2b6a93a7db7a39208f2d8b53ad
        "watch_together": "880218394199220334",
        "poker_night": "755827207812677713",
        "betrayal.io": "773336526917861400",
        "fishington.io": "814288819477020702",
        "chess_in_the_park": "832012774040141894",
        "sketchy_artist": "814288819477020702",
        "awkword": "879863881349087252",
        "delete_me_calla": "832012854282158180",
        "doodle_crew": "878067389634314250",
        "sketchy_heads": "902271654783242291",
        "letter_league": "879863686565621790",
        "word_snacks": "879863976006127627",
        "spell_casts": "852509694341283871",
        "checkers_in_the_park": "832013003968348200",
        "blazing_8s": "832025144389533716",
        "putt_party": "945737671223947305",
        "land_io": "945737671223947305",
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
