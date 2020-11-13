const Discord = require('discord.js')

// Adding Json
const fs = require('fs')
const color = JSON.parse(fs.readFileSync('../json/color.json'))

// Adding JS
const Embed = require('../tools/embed.js');

module.exports = {

    command(msg, args) {

        if ( args[0] == null ) {

            // Sending Help Embed for the Skeld Map
            Embed.createFieldNumbered(
                msg.channel,
                color.orange,
                "^map skeld//^map mira//^map polus",
                ":dividers: Choose your map",
                "pick one",
                "https://cdn-www.bluestacks.com/bs-images/89cfc0bdd6e77f409b33c59d5289b155.png",
            )

        } else if ( args[0].toUpperCase() === "SKELD" && args.length === 1 ) {

            // Sending Embed with skled map
            Embed.createFields(
                msg.channel,
                color.gray,
                false,
                ":map: **The Skeld map**",
                "map by u/SuperInkyGD",
                false,
                "https://u.cubeupload.com/SuperInky/skeldmapguidev2.png"

            )
        } else if ( args[0].toUpperCase() === "MIRA" && args.length === 1 ) {

            // Sending Embed with Mira map
            Embed.createFields(
                msg.channel,
                color.yellow,
                false,
                ":map: **The Mira map**",
                "map by u/SuperInkyGD",
                false,
                "https://i.redd.it/8i1kd1mp9ij51.png"

            )
        } else if ( args[0].toUpperCase() === "POLUS" && args.length === 1 ) {

            // Sending Embed with Polus map
            Embed.createFields(
                msg.channel,
                color.purple_dark,
                false,
                ":map: **The Polus map**",
                "map by u/SuperInkyGD",
                false,
                "https://cdn.discordapp.com/attachments/754031126149988453/754033354852270190/POLUS_MAP_GUIDE.png"

            )
        }
    }
}