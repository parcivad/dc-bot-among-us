const Discord = require('discord.js')

// Adding Json
const fs = require('fs')
const color = JSON.parse(fs.readFileSync('../json/color.json'))

// Adding JS
const Embed = require('../tools/embed.js');

module.exports = {

    command(msg, args) {

        Embed.create(
          msg.channel,
          color.red_dark,
          "The Bot is now OFFLINE!",
          "Bot OFFLINE",
          "bye"
        );

    }
}