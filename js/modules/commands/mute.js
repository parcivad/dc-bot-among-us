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

                        // START: MUTE ON
                        if ( msg.member.voice.channel ) {

                            // Getting some Data
                            let voiceChannel = msg.member.voice.channel;
                            let voiceMembers = voiceChannel.members;

                            // Muting each Voice Channel
                            voiceMembers.forEach(member => {
                                member.voice.setMute(true);
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
                        }
                        // END: MUTE ON

                    } else if (args[0] === "off") {

                        // START: MUTE OFF
                        if ( msg.member.voice.channel ) {

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
                        }
                        // END: MUTE OFF

                    } else if ( args.length === 2 && args[1] === "on") {

                        // START: MUTE USER ON
                        // Checking the Mention in the Command
                        if ( msg.mentions.members.first() && msg.mentions.members.first().id !== msg.author.id ) {
                            // Member to mute
                            let voiceMember = msg.mentions.members.first();
                            // Is Member to mute in a voiceChannel
                            if ( voiceMember.voice.channel ) {
                                // Is it a AmongUs Channel
                                if ( voiceMember.voice.channel.name.split('#')[0] === "AmongUs " ) {
                                    //Person to mute === Person muting
                                    if ( voiceMember.voice.channel.name.split("#")[1] === msg.member.voice.channel.name.split("#")[1]) {
                                        // Muting person

                                        voiceMember.voice.setMute(true);

                                        Embed.create(
                                            msg.channel,
                                            color.red,
                                            "The User is now muted!",
                                            "Mute",
                                            "mute command executed"
                                        )

                                    } else {

                                        //Sending Embed
                                        Embed.create(
                                            msg.channel,
                                            color.red,
                                            "Person isn´t in your Game!",
                                            "Mute",
                                            "mute command"
                                        );
                                    }
                                } else {

                                    //Sending Embed
                                    Embed.create(
                                        msg.channel,
                                        color.red,
                                        "You can only mute Persons who are in your Game",
                                        "Mute",
                                        "mute command"
                                    )

                                }
                            } else {

                                // Sending Embed
                                Embed.create(
                                    msg.channel,
                                    color.red,
                                    "Person isn´t in a Voice Chat",
                                    "Mute",
                                    "mute command"
                                )
                            }
                        } else {

                            // Sending Embed
                            Embed.createFields(
                                msg.channel,
                                color.orange,
                                "Command://^mute {@user} {on/off}",
                                "Mute Help",
                                "mute help command"
                            );
                        }
                        // END: MOD USER ON

                    } else if ( args.length === 2 && args[1] === "off") {

                        // START: MUTE USER ON
                        // Checking the Mention in the Command
                        if ( msg.mentions.members.first() && msg.mentions.members.first().id !== msg.author.id ) {
                            // Member to mute
                            let voiceMember = msg.mentions.members.first();
                            // Is Member to mute in a voiceChannel
                            if ( voiceMember.voice.channel ) {
                                // Is it a AmongUs Channel
                                if ( voiceMember.voice.channel.name.split('#')[0] === "AmongUs " ) {
                                    //Person to mute === Person muting
                                    if ( voiceMember.voice.channel.name.split("#")[1] === msg.member.voice.channel.name.split("#")[1]) {
                                        // Muting person

                                        voiceMember.voice.setMute(false);

                                        Embed.create(
                                            msg.channel,
                                            color.green,
                                            "The User is now unmuted!",
                                            "Mute",
                                            "mute command executed"
                                        )

                                    } else {

                                        //Sending Embed
                                        Embed.create(
                                            msg.channel,
                                            color.red,
                                            "Person isn´t in your Game!",
                                            "Mute",
                                            "mute command"
                                        );
                                    }
                                } else {

                                    //Sending Embed
                                    Embed.create(
                                        msg.channel,
                                        color.red,
                                        "You can only mute Persons who are in your Game",
                                        "Mute",
                                        "mute command"
                                    )

                                }
                            } else {

                                // Sending Embed
                                Embed.create(
                                    msg.channel,
                                    color.red,
                                    "Person isn´t in a Voice Chat",
                                    "Mute",
                                    "mute command"
                                )
                            }
                        } else {

                            // Sending Embed
                            Embed.createFields(
                                msg.channel,
                                color.orange,
                                "Command://^mute {@user} {on/off}",
                                "Mute Help",
                                "mute help command"
                            );
                        }
                        // END: MOD USER ON

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