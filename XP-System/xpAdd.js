/*
*
*   Things to add to XP-Add:
* ----------------------------
*
*/
const Discord = require("discord.js");

const mongoose = require("mongoose");
//mongoose.connect("mongodb://roast-bot-ole113-npqi1.gcp.mongodb.net:27017/XP-System");
//mongoose.connect("mongodb://127.0.0.1:27017/XP-System");
var opts = { user: "Admin", pass: "aelb2580" }
//db = mongoose.createConnection("localhost", "XP-System", 27017)
mongoose.connect("mongodb://localhost:27017/XP-System", opts);
exports.run = async () => {


}