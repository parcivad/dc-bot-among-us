const Discord = require('discord.js')

// Adding Json
const fs = require('fs')
const color = JSON.parse(fs.readFileSync('../json/color.json'))

// Adding JS
const Embed = require('../tools/embed.js');

module.exports = {

    command(msg, args) {

        Embed.createFields(
            msg.channel,
            color.orange,
            "^create To create an game//^delete Will delete a running Game//^mod {to} {user}//^map to see all or one map",
            ":screwdriver: Bot commands",
            "all impos ähm bot commands",
            "https://cdn-www.bluestacks.com/bs-images/89cfc0bdd6e77f409b33c59d5289b155.png")

    }
}