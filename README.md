# AmongUs Discord Bot
Bot to manage Channels and Permissions for the game AmongUs.

[![Discord](https://img.shields.io/discord/690934524955197471?label=Discord&logo=discord)](https://discord.gg/MFhh5XEM2b)

## Features:
Some of the Bot Features:

`create` is for creating a Channel in your category that you can set in `config`, the users can delete their Channel with
`delete`.

To manage the AmongUs ChannelPermissions will the Bot create a new role, when the user delete his Channel the Bot delete this role also.
The Command `mod` is for manage the mute permissions for this Channel

`map` is just a little Feature wich show the User a tactical map of the game map.

## Settings
You can set `colored output`for the console on true or false in 
`json/config.json`!

## Commands:
```
create
delete
mod {remove} {user}
mod {user}
mod
mute {on/off}
map {skeld/mira/polus}
```

## Setup:
You have to set your Bot Token in `json/config.json`and set a prefix, then your finished and can run the Bot.

To run the Bot you must use this path: `dc-bot-among-us/json/`
thats it!

### The Game:
You can find the game there:
https://store.steampowered.com/app/945360/Among_Us/

#### Start Bot From scatch
On Mac:
```
1. Download node.js -> https://nodejs.org/en/

2. Download the Code
3. Editing config.json
2. open terminal
3. type: 
         cd {path to the bot folder}/json
         npm install
         npm start
4. the Bot will then start
```
On Windows:
```
1. Download node.js -> https://nodejs.org/en/

2. Download the Code
3. Editing config.json
2. open terminal
3. type: 
         {path to the bot folder}/json
         npm install
         npm start
4. the Bot will then start
```

![AmongUs Picture](https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/8a/8b/ee/8a8bee6e-aa0b-0b51-a743-b1b074835f96/source/256x256bb.jpg)
