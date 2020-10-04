const Discord = require('discord.js')

// Adding Json
const fs = require('fs')
const color = JSON.parse(fs.readFileSync('../json/color.json'))

// Adding JS
const Embed = require('../tools/embed.js');

module.exports = {

    command(msg, args) {

        var voiceChannel = msg.guild.channels.cache.get(msg.member.voice.channel.name).split("#");


        if ( msg.guild.channels.cache.find(channel => channel.name === "AmongUs #" + voiceChannel[1]) ) {
            if ( msg.member.guild.roles.cache.find(role => role.name === "AmongUsChannel #" + voiceChannel[1]) ) {

                msg.channel.send("true");

            } else {

                Embed.create(
                    msg.channel,
                    color.red,
                    "You have no Permissions for this Action!",
                    ":rotating_light: Mod",
                    "permission error"
                );

            }
        } else {

            Embed.createFields(
                msg.channel,
                color.red,
                "No Game is on this Tag running!",
                ":rotating_light: Game Info",
                "error"
            );

        }
    }
}