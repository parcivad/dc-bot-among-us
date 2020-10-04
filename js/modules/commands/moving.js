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

            var AUchannel = msg.guild.channels.cache.find(channel => channel.name === "AmongUs #" + usertag[1]);

            AUchannel.updateOverwrite(AUchannel.guild.roles.everyone, { SPEAK: false });

            
            Embed.createFields(
                msg.channel,
                color.purple_dark,
                "Be Quiet, your muted!",
                "SHHHHH",
                "player moving over the map",
                false,
                "https://cdn.discordapp.com/attachments/752122843512438905/760153998123597834/shh.png",
            );

        } else {

            Embed.create(
                msg.channel,
                color.red,
                "You have to create a game!",
                "Moving Command",
                "error"
            );

        }
    }
}