const { Structures, Invite, Client } = require('discord.js');
/**
 * @param {Client} client 
 */
module.exports = (client) => {
  // if no client specified
  if(!client || !client instanceof Client) throw new Error('INVALID_CLIENT: No Client/Invalid Client Provided.')
  // extend voice channel to add activity invite function
  Structures.extend('VoiceChannel', VoiceChannel => {
    
    return class EpicVoiceChannel extends VoiceChannel {

      constructor(client, data) {
        super(client, data);
      }

      /**
       * Creates Activity Invite in the voice channel
       * @param {string} ApplicationID - Application ID
       * @returns {Invite}
       */
      
      activityInvite(ApplicationID){
        return this.client.api.channels(this.id).invites.post({
          data: {
            max_age: 86400,
            max_uses: 0,
            target_application_id: ApplicationID,
            target_type: 2,
            temporary: false,
            validate: null
          },
        }).then(invite => new Invite(this.client, invite))
      }
    }
  });
}
// The End.