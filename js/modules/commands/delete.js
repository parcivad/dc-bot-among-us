const Discord = require('discord.js')

// Adding Json
const fs = require('fs')
const color = JSON.parse(fs.readFileSync('../json/color.json'))

// Adding JS
const Embed = require('../tools/embed.js');

module.exports = {

    command(msg, args) {

        // Users Tag
        let usertag = msg.member.user.tag.split("#");

        // Is there a Voice Channel on the Tag
        if ( msg.guild.channels.cache.find(channel => channel.name === "AmongUs #" + usertag[1]) ) {

            // Deleting the Voice Channel
            msg.guild.channels.cache.find(channel => channel.name === "AmongUs #" + usertag[1]).delete();
            // Deleting the Mod Role
            msg.guild.roles.cache.find(role => role.name === "AmongUsChannel #" + usertag[1]).delete();

            // Sending Embed
            Embed.create(
                msg.channel,
                color.red,
                "Your Voice Channel for Among Us deleted!",
                ":red_square: Game Delete",
            );

        } else {

            // Sending Embed
            Embed.create(
                msg.channel,
                color.red,
                "No Game is on your Tag running!",
                ":rotating_light: Game Info",
                "error"
            );

        }
    }
}