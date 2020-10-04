const Discord = require('discord.js')

module.exports = {

    /** The function create is for Embed Creations in Script
     *
     * @param {Discord.Channel} channel The Discord Channel were the Embed will send to
     * @param col The color of the embed!
     * @param {string} content Description of the embed
     * @param {string} title Title of the embed
     * @param {string} footer Footer of the embed
     * @param {string} thumbnail Thumbnail of the embed
     * @param {url} image Image in the Embed
     * @returns {*}
     */
    create(channel, color, content, title, footer, thumbnail, image) {
        var message
        var embed = new Discord.MessageEmbed()
            .setColor(color)
        if (content) {
            embed.setDescription(content);
        }
        if (thumbnail) {
            embed.setThumbnail(thumbnail);
        }
        if (image) {
            embed.setImage(image);
        }
        if (footer) {
            embed.setFooter(footer)
        }
        if (title) {
            embed.setTitle(title)
        }
        channel.send(' ', embed).then((m) => {
            message = m
        })
        return message
    },

    /** The function create is for Embed Creations in Script
     *
     * @param {Discord.Channel} channel The Discord Channel were the Embed will send to
     * @param color The color of the embed!
     * @param {string} content Description of the embed
     * @param {string} title Title of the embed
     * @param {string} footer Footer of the embed
     * @param {string} thumbnail Thumbnail of the embed
     * @param {url} image Image in the Embed
     * @returns {*}
     */
    createFields(channel, color, content, title, footer, thumbnail, image) {

        var message
        var embed = new Discord.MessageEmbed()
            .setColor(color)
        if (content) {
            var contentArray = content.split('//')
            embed.setDescription(contentArray)
        }
        if (thumbnail) {
            embed.setThumbnail(thumbnail);
        }
        if (image) {
            embed.setImage(image);
        }
        if (footer) {
            embed.setFooter(footer)
        }
        if (title) {
            embed.setTitle(title)
        }
        channel.send(' ', embed).then((m) => {
            message = m
        })
        return message
    },

    /** The function create is for Embed Creations in Script
     *
     * @param {Discord.Channel} channel The Discord Channel were the Embed will send to
     * @param col The color of the embed!
     * @param {string} content Description of the embed
     * @param {string} title Title of the embed
     * @param {string} footer Footer of the embed
     * @param {string} thumbnail Thumbnail of the embed
     * @param {url} image Image in the Embed
     * @returns {*}
     */
    createFieldNumbered(channel, color, content, title, footer, thumbnail, image) {
        var contentArray = content.split('//')
        var counter = 0;

        while ( counter != contentArray.length ) {
            nowtext = contentArray[counter]
            counter++
            settext = "**" + counter + ".** " + nowtext
            counter--
            contentArray[counter] = settext
            counter++

        }

        var message
        var embed = new Discord.MessageEmbed()
            .setColor(color)
            .setDescription(contentArray)
        if (thumbnail) {
            embed.setThumbnail(thumbnail);
        }
        if (image) {
            embed.setImage(image);
        }
        if (footer) {
            embed.setFooter(footer)
        }
        if (title) {
            embed.setTitle(title)
        }
        channel.send(' ', embed).then((m) => {
            message = m
        })
        return message
    }

}