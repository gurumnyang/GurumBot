const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

var json1 = fs.readFileSync('token.json', 'utf-8');
var token = JSON.parse(json1).token;

client.on("ready", () => {
    console.log(`${client.user.tag}에 로그인하였습니다!`);
});
client.on("message", msg => {
    if (msg.content === "핑") {
        msg.channel.send("퐁!");
    }
});
client.login(token);