const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: "",
    port: "",
});

connection.connect();

exports.run = async (message) => {

    //INSERT INTO `t_users` VALUES ('1', 'Bonjour', 'mondeEEEEE');

    let user = {
        username: message.author.username,
        userID: message.author.id,
        userXP: 0,
        userLevel: 0
    }
    
    let query = connection.query("insert into roast_bot_xp set ?", user, function (err, result) {
        if (err) {
            console.error(err);
            return;
        }
        user.userID++;
        console.log(user.userXP);
        //console.error(result);
    });

    if(user.userXP >= 10) {
        user.userLevel = 1;
        console.log("LEVEL 1");
    } else {
        console.log(`LEVEL: ${user.userLevel}, XP: ${user.userXP}`);
    }
}