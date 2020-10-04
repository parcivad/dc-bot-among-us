const Discord = require('discord.js')

// Adding Json
const fs = require('fs')
const color = JSON.parse(fs.readFileSync('../json/color.json'))

// Adding JS
const Embed = require('../tools/embed.js');

module.exports = {

    command(msg, args) {

        if ( args[0] == null ) {

            Embed.createFieldNumbered(
                msg.channel,
                color.orange,
                "^map skeld//^map mira//^map polus",
                ":dividers: Choose your map",
                "pick one",
                "https://cdn-www.bluestacks.com/bs-images/89cfc0bdd6e77f409b33c59d5289b155.png",
            )

        } else if (( args[0] === "skeld" || args[0] === "Skeld") && args.length === 1 ) {

            Embed.createFields(
                msg.channel,
                color.gray,
                false,
                ":map: **The Skeld map**",
                "map by u/SuperInkyGD",
                false,
                "https://u.cubeupload.com/SuperInky/skeldmapguidev2.png"

            )
        } else if (( args[0] === "mira" || args[0] === "Mira") && args.length === 1 ) {

            Embed.createFields(
                msg.channel,
                color.yellow,
                false,
                ":map: **The Mira map**",
                "map by u/SuperInkyGD",
                false,
                "https://i.redd.it/8i1kd1mp9ij51.png"

            )
        } else if (( args[0] === "polus" || args[0] === "Polus") && args.length === 1 ) {

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