/*
*
*   Things to add to r!meme:
* ----------------------------
*
*/

const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (message) => {
    
    function status() {
        if(message.author.equals("online")) {
            return "Online";
        }
    }
    if(message.content.toLowerCase() == "rb!user") {
        let user_embed = new Discord.RichEmbed()
        .setColor("#EB671D")
        .setTitle(`${message.author.username}'s Stats:`)
        .setThumbnail(message.author.displayAvatarURL)
        .addField("Account created at: ", message.author.createdAt.toString())
        .addField("Current Presense ", status());
        //return message.channel.send(message.author.createdAt.toString());
        return message.channel.send(user_embed);
    }

    
}
