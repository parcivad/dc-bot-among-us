const Discord = require('discord.js');
const fs = require('fs');

// Json hinzufügen
const config = JSON.parse(fs.readFileSync('../json/config.json'));
const colors = require('colors');
const color = require('../json/color.json');
const Embed = require('../js/modules/tools/embed.js');

// Client aufsetzen
var client = new Discord.Client()

//importing Modules
const Help = require("./modules/commands/help.js");
const Map = require("./modules/commands/map.js");
const Create = require("./modules/commands/create.js");
const Delete = require("./modules/commands/delete.js");
const Mod = require("./modules/commands/mod.js");
const Mute = require("./modules/commands/mute.js");

// If client is ready it will put out Informations in the console
client.on('ready', () => {
    // Setting a funny User Status
    client.user.setActivity( `in electrical | ${config.prefix}help`, { type: 'LISTENING' });

    // Showing the bot user some Informations
    console.log("----------[Client Informations]----------".bold)
    console.log("Username: " + client.user.username)
    console.log("User id: " + client.user.id)
    console.log("User avatar: " + client.user.avatar)
    console.log("User tag: " + client.user.tag)
    console.log("To Add the Bot to your Server: https://discord.com/oauth2/authorize?client_id=your_apllication_id&scope=bot&permissions=1878523457".gray)
    console.log("----------[Client Informations]----------".bold)
    console.log(" ")
    console.log("-> Client online and ready if no error appear!".underline)
})



// Command Map for functions
const cmdmap = {
    create: cmd_create,
    help: cmd_help,
    map: cmd_map,
    delete: cmd_delete,
    mod: cmd_mod,
    mute: cmd_mute,
}

// Functions for the command map
function cmd_help(msg, args) {Help.command(msg, args);}
function cmd_map(msg, args) {Map.command(msg, args);}
function cmd_create(msg, args) {Create.command(msg, args);}
function cmd_delete(msg, args) {Delete.command(msg, args);}
function cmd_mod(msg, args) {Mod.command(msg, args);}
function cmd_mute(msg, args) {Mute.command(msg, args);}

// waiting for the event: message
client.on('message', (msg) => {

    // some vars that i use
    var cont = msg.content,
        author = msg.member,
        chan = msg.channel,
        guild = msg.guild

    if (msg.channel.type === 'dm' && msg.author.id != client.user.id) {

        // Sending the User an Information in his DM chat
        Embed.create(
            msg.channel,
            color.orange,
            "This Bot will not react to any commands in this Chat!",
            "DM Chat Information",
            "dm chat"
        );
        // Sending into console
        let message = "The User " + msg.author.tag + " tried to dm the bot!";
        sendconsole(false, message);

        return true;
        // Otherwise the Bot will continue
    } else if ( msg.author.id != client.user.id && cont.startsWith(config.prefix)){

        let invoke = cont.split(' ')[0].substr(config.prefix.length),
            args = cont.split(' ').slice(1)

        if (invoke in cmdmap) {

            //Sending into console
            sendconsole(true, false, invoke, args, msg);

            cmdmap[invoke](msg, args)
        }
    }
});

/***
 *
 * @param command is it an Command or not
 * @param message if its not a command
 * @param invoke invoke
 * @param args args
 * @param msg the message
 */
function sendconsole(command, message, invoke, args, msg) {

    // Data for the Console output
    let d = new Date();
    let time= ('0' + d.getHours()).slice(-2)+ ':' + ('0'  + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2);

    // is it a command
    if ( command && !message ) {

        // Converting Array into String with spaces
        let strargs = args.join(" ");

        // Sending Colored or not Colored console output COMMAND
        if ( config.consoleColored ) {
            console.log( time.gray + " | Der User: " + msg.author.tag + ", executed: " + invoke.red + " " + strargs.yellow);
        } else {
            console.log( time + " | Der User: " + msg.author.tag + ", executed: " + invoke + " " + strargs);
        }

    } else {

        // Sending Colored or not Colored console output MESSAGE
        if ( config.consoleColored ) {
            console.log( time.gray + " | Notification: " + message.red);
        } else {
            console.log( time + " | Notification: " + message);
        }

    }
}


// Login bot
// https://discord.com/oauth2/authorize?client_id=[APPLICATION ID]&scope=bot&permissions=1878523457
client.login(config.token);
