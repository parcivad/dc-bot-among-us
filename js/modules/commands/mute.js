const Discord = require('discord.js')

// Adding Json
const fs = require('fs')
const color = JSON.parse(fs.readFileSync('../json/color.json'))

// Adding JS
const Embed = require('../tools/embed.js');

module.exports = {

    command(msg, args) {

        // Permissions and other Stuff
        if ( msg.member.voice.channel ) {
            if ( msg.member.voice.channel.name.split("#")[0] === "AmongUs " ) {
                if ( msg.member.roles.cache.find(role => role.name === "AmongUsChannel #" + msg.member.voice.channel.name.split("#")[1])) {

                    if ( args[0] === "on") {

                        // Getting some Data
                        let voiceChannel = msg.member.voice.channel;
                        let voiceMembers = voiceChannel.members;

                        // Muting each Voice Channel
                        voiceMembers.forEach(member => {
                            member.voice.setMute(true)
                        });

                        // Message
                        Embed.create(
                            msg.channel,
                            color.orange,
                            "Muted your Voice Channel!",
                            "SHHHHHHH",
                            "mute command executed",
                            false,
                            "https://cdn.discordapp.com/attachments/752122843512438905/760153998123597834/shh.png"
                        );

                    } else if (args[0] === "off") {

                        // Getting some Data
                        let voiceChannel = msg.member.voice.channel;
                        let voiceMembers = voiceChannel.members;

                        // Muting each Voice Channel
                        voiceMembers.forEach(member => {
                            member.voice.setMute(false);
                        });

                        // Message
                        Embed.create(
                            msg.channel,
                            color.orange,
                            "Unmuted your Voice Channel!",
                            "Discuss!",
                            "mute command executed",
                            false,
                            "https://cdn.discordapp.com/attachments/752122843512438905/774382251202969600/5a8492b7c97473382778e22d9e1b2926.png"
                        );

                    } else {

                        //Message
                        Embed.create(
                            msg.channel,
                            color.orange,
                            "^mute {on/off}",
                            "Mute help",
                            "^help",
                        );

                    }


                } else {

                    // User have no mute permission
                    Embed.create(
                        msg.channel,
                        color.red,
                        "Your not the mod of the Channel!",
                        "Permission Error",
                        "error mute command"
                    );

                }
            } else {

                // User isn´t in a Among Us Channel
                Embed.create(
                    msg.channel,
                    color.red,
                    "This mute command is just for the AmongUs Channels!",
                    "Can´t mute",
                    "error mute command"
                );

            }
        } else {

            // User isn´t in a Voice Channel!
            Embed.create(
                msg.channel,
                color.red,
                "You must be in a Voice Channel!",
                "Can´t mute",
                "error mute command"
            );

        }
    }
}