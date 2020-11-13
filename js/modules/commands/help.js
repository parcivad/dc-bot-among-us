const Discord = require('discord.js')

// Adding Json
const fs = require('fs')
const color = JSON.parse(fs.readFileSync('../json/color.json'))

// Adding JS
const Embed = require('../tools/embed.js');

module.exports = {

    command(msg, args) {

        // Sending Embed for the Basic Commands
        Embed.createFields(
            msg.channel,
            color.green,
            "^create - To create a Game//^delete - To delete a game//^map - Shows a map",
            ":game_die:Basic Command"
        );

        // Sending Embed for the Mod Commands
        Embed.createFields(
            msg.channel,
            color.red,
            "^mod - Gives you Mod Rang//^mod {user} - Gives the Person Mod//^mod remove {user} - Take the Mod from the Person",
            ":classical_building:Mod Command"
        );

        // Sending Embed for the Mute Command
        Embed.createFields(
            msg.channel,
            color.yellow,
            "^mute {on/off} - To mute your Game//^mute {user} {on/off}",
            ":tickets:Mute Command"
        );
    }
}