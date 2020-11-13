const Discord = require('discord.js')

// Adding Json
const fs = require('fs')
const color = JSON.parse(fs.readFileSync('../json/color.json'));
const config = JSON.parse(fs.readFileSync('../json/config.json'));

// Adding JS
const Embed = require('../tools/embed.js');

module.exports = {


    command(msg, args) {

        // Users Tag
        let usertag = msg.member.user.tag.split("#");

        // Command looks like: ^mod
        if (args.length === 0) {

            // Has the Person a open AmongUs game
            if (msg.guild.channels.cache.find(channel => channel.name === "AmongUs #" + usertag[1])) {

                // Creating the Role and adding it to the Player
                let role = msg.guild.roles.cache.find(role => role.name === "AmongUsChannel #" + usertag[1]);
                msg.member.roles.add(role);

                // Sending Embed
                Embed.createFields(
                    msg.channel,
                    color.purple_dark,
                    "Mod Changed to: :tools:" + msg.member.user.username,
                    ":hammer: Mod",
                    "mod changed!"
                );


            } else {

                // Sending Embed
                Embed.createFields(
                    msg.channel,
                    color.red,
                    "No Game is running on your tag! The Owner of your AmongUs Channel can give you mod with: ^mod @User",
                    ":rotating_light: Game Info",
                    "error"
                );

            }

        // Command looks like: ^mod remove @user
        } else if (args[0] === "remove" && args.length === 2) {

            // Checking Mention
            if ( msg.mentions.members.first() && msg.mentions.members.first().id !== msg.author.id ) {

                // Has the owner a open Game
                if (msg.guild.channels.cache.find(channel => channel.name === "AmongUs #" + usertag[1])) {

                    // Finding Role and removing it from the Player
                    let role = msg.guild.roles.cache.find(role => role.name === "AmongUsChannel #" + usertag[1]);
                    let member = msg.mentions.members.forEach((member) => {
                        member.roles.remove(role);
                    });

                    // Sending Embed
                    Embed.createFields(
                        msg.channel,
                        color.purple_dark,
                        "Mod removed: " + msg.mentions.users.first().username,
                        ":man_police_officer: Mod",
                        "mod changed!"
                    );


                } else {

                    // Sending Embed
                    Embed.createFields(
                        msg.channel,
                        color.red,
                        "No Game is running on your tag! The Owner of your AmongUs Channel can give you mod with: ^mod @User",
                        ":rotating_light: Game Info",
                        "error"
                    );

                }

            } else {

                // Sending Embed
                Embed.createFields(
                    msg.channel,
                    color.red,
                    "Please name a Person like: ^mod remove @DiedInElectrical",
                    ":rotating_light: Mod",
                    "mod error"
                );

            }

        // Commands could like: ^mod @user
        } else if (args.length === 1) {

            // Checking Mention
            if ( msg.mentions.members.first() && msg.mentions.members.first().id !== msg.author.id ) {

                // Has the owner a open game
                if (msg.guild.channels.cache.find(channel => channel.name === "AmongUs #" + usertag[1])) {

                    // Finding role
                    let role = msg.guild.roles.cache.find(role => role.name === "AmongUsChannel #" + usertag[1]);
                    let member = msg.mentions.members.forEach((member) => {
                        member.roles.add(role);
                    });
                    msg.member.roles.remove(role);

                    // Sending Embed
                    Embed.createFields(
                        msg.channel,
                        color.purple_dark,
                        "Mod Changed to: :tools:" + msg.mentions.users.first().username,
                        ":hammer: Mod",
                        "mod changed!"
                    );
                } else {

                    // Sending Embed
                    Embed.createFields(
                        msg.channel,
                        color.red,
                        "No Game is running on your tag! The Owner of your AmongUs Channel can give you mod with: ^mod @User",
                        ":rotating_light: Game Info",
                        "error"
                    );
                }
            } else {

                // Sending Embed
                Embed.createFields(
                    msg.channel,
                    color.red,
                    "Please name a Person like: ^mod @DiedInElectrical",
                    ":rotating_light: Mod",
                    "mod error"
                );
            }
        } else {

            // Sending Embed
            Embed.create(
                msg.channel,
                color.orange,
                "^mod {user/remove} {user}",
                ":classical_building: Mod Command",
                "mod help"
            );
        }
    }
}