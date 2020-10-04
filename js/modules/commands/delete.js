const Discord = require('discord.js')

// Adding Json
const fs = require('fs')
const color = JSON.parse(fs.readFileSync('../json/color.json'))

// Adding JS
const Embed = require('../tools/embed.js');

module.exports = {

    command(msg, args) {

        var usertag = msg.member.user.tag.split("#");

        if ( msg.guild.channels.cache.find(channel => channel.name === "AmongUs #" + usertag[1]) ) {

            msg.guild.channels.cache.find(channel => channel.name === "AmongUs #" + usertag[1]).delete();
            if ( !msg.guild.roles.cache.find(role => role.name === "AmongUsChannel #" + usertag[1])) {
                Embed.create(
                    msg.channel,
                    color.red,
                    "You have no Permission for this Action",
                    ":red_square: Cancel!",
                );
                return
            }
            msg.guild.roles.cache.find(role => role.name === "AmongUsChannel #" + usertag[1]).delete();

            Embed.create(
                msg.channel,
                color.red,
                "Your Voice Channel for Among Us deleted!",
                ":red_square: Game Delete",
            );

        } else {

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