const Discord = require('discord.js')

// Adding Json
const fs = require('fs')
const color = JSON.parse(fs.readFileSync('../json/color.json'))

// Adding JS
const Embed = require('../tools/embed.js');

module.exports = {


    command(msg, args) {

        var usertag = msg.member.user.tag.split("#");

        if ( args.length === 0 ) {

            if ( msg.guild.channels.cache.find(channel => channel.name === "AmongUs #" + usertag[1])) {

                var role = msg.guild.roles.cache.find(role => role.name === "AmongUsChannel #" + usertag[1]);
                msg.member.roles.add(role);

                Embed.createFields(
                    msg.channel,
                    color.purple_dark,
                    "Mod Changed to: :man_police_officer:" + msg.member.user.username,
                    ":man_police_officer: Mod",
                    "mod changed!"
                );


            } else {

                Embed.createFields(
                    msg.channel,
                    color.red,
                    "No Game is on your Tag running!// //Create a game with ^create OR//the Mod in your game: :man_police_officer:" + msg.member.user.username + "//can give you Mod Permissions",
                    ":rotating_light: Game Info",
                    "error"
                );

            }

        } else if ( args[0] === "to" && args.length === 2) {

            if ( msg.guild.channels.cache.find(channel => channel.name === "AmongUs #" + usertag[1])) {

                var role = msg.guild.roles.cache.find(role => role.name === "AmongUsChannel #" + usertag[1]);
                var member = msg.mentions.members.forEach((member) => {
                    member.roles.add(role);
                });
                msg.member.roles.remove(role);



                Embed.createFields(
                    msg.channel,
                    color.purple_dark,
                    "Mod Changed to: :man_police_officer:" + msg.mentions.users.first().username,
                    ":man_police_officer: Mod",
                    "mod changed!"
                );


            } else {

                Embed.createFields(
                    msg.channel,
                    color.red,
                    "No Game is on your Tag running!// //Create a game with ^create OR//the Mod in your game: :man_police_officer:" + msg.member.user.username + "//can give you Mod Permissions",
                    ":rotating_light: Game Info",
                    "error"
                );

            }

        }  else if ( args[0] === "remove" && args.length === 2) {

            if ( msg.guild.channels.cache.find(channel => channel.name === "AmongUs #" + usertag[1])) {

                var role = msg.guild.roles.cache.find(role => role.name === "AmongUsChannel #" + usertag[1]);
                var member = msg.mentions.members.forEach((member) => {
                    member.roles.remove(role);
                });



                Embed.createFields(
                    msg.channel,
                    color.purple_dark,
                    "Mod removed: " + msg.mentions.users.first().username,
                    ":man_police_officer: Mod",
                    "mod changed!"
                );


            } else {

                Embed.createFields(
                    msg.channel,
                    color.red,
                    "No Game is on your Tag running!// //Create a game with ^create OR//the Mod in your game: :man_police_officer:" + msg.member.user.username + "//can give you Mod Permissions",
                    ":rotating_light: Game Info",
                    "error"
                );

            }

        }
    }
}