const Discord = require('discord.js')

// Adding Json
const fs = require('fs')
const color = JSON.parse(fs.readFileSync('../json/color.json'))
const config = JSON.parse(fs.readFileSync('../json/config.json'))

// Adding JS
const Embed = require('../tools/embed.js');

module.exports = {

    command(msg, args) {

        var usertag = msg.member.user.tag.split("#");

        if ( !msg.guild.channels.cache.find(channel => channel.name === "AmongUs #" + usertag[1])) {



            var AmongVoice = msg.guild.channels.create( "AmongUs #" + usertag[1], {
                type: 'voice',
                parent: msg.guild.channels.cache.find(c => c.name == "▬▬ Among Us ▬▬" && c.type == "category"),
                userLimit: 10,
                permissionOverwrites: [
                    {
                        id: config.everyoneRoleId,
                        deny: ['STREAM'],
                    },
                ],
            });

            var AmongRole = msg.guild.roles.create({
                data: {
                    name: "AmongUsChannel #" + usertag[1],
                    color: color.orange,
                },
                reason: "For Moderation in the Among Us Channels",
            });

            Embed.createFields(
                msg.channel,
                color.green,
                "Voice Channel for your game created!// //pls set a Mod with ^mod",
                ":green_square: Game Create",
                "game created!"
            );


        } else {

            Embed.create(
                msg.channel,
                color.red,
                "A Game is on your tag running",
                ":rotating_light: Game Info",
                "error"
            );

        }
    }
}