const Enmap = require("enmap");
const xpLevel = new Enmap({ name: "xp-level" });
const bsp = require("better-sqlite-pool");

const prefixFile = require("./prefix.json");

exports.run = async (message) => {

	xpLevel.defer.then(() => {
		if (message.author.bot) { return; }

		const key = message.guild.id;
		const prefix = String(prefixFile.get(key, "prefix"));
		
		if (message.content.startsWith(prefix)) {
			const key = message.author.id;
			if (!xpLevel.has(key)) {
				xpLevel.set(key, {
					user: message.author.id, points: 0, level: 1
				});
			}
			let currentPoints = xpLevel.get(key, "points");
			xpLevel.set(key, ++currentPoints, "points");
			let curLevel = xpLevel.get(key, "level");
			if (currentPoints === 10) {
				xpLevel.set(key, ++curLevel, "level");
				return message.reply("Level up, your now level 2: Roast-Noob! <:roast_circle:474755210485563404>.\n\n10/15 XP for level 3.");
			} else if (currentPoints === 15) {
				xpLevel.set(key, ++curLevel, "level");
				return message.reply("Level up, your now level 3: Roast-Learner! <:roast_circle:474755210485563404>.\n\n15/25 XP for level 4.");
			} else if (currentPoints === 25) {
				xpLevel.set(key, ++curLevel, "level");
				return message.reply("Level up, your now level 4: Mediocre Roaster! <:roast_circle:474755210485563404>\n\n25/50 XP for level 5.");
			} else if (currentPoints === 50) {
				xpLevel.set(key, ++curLevel, "level");
				return message.reply("Level up, your now level 5: Advanced Roaster! <:roast_circle:474755210485563404>\n\n50/100 XP for level 6.");
			} else if (currentPoints === 100) {
				xpLevel.set(key, ++curLevel, "level");
				return message.reply("Level up, your now level 6: Roast-Master! <:roast_circle:474755210485563404>\n\n100/200 XP for level 7.");
			} else if (currentPoints === 200) {
				xpLevel.set(key, ++curLevel, "level");
				return message.reply("Level up, your now level 7: Roast-Jesus! <:roast_circle:474755210485563404>\n\n200/500 XP for level 8.");
			} else if (currentPoints === 500) {
				xpLevel.set(key, ++curLevel, "level");
				return message.reply("Level up, your now level 8: Roast-God! <:roast_circle:474755210485563404>\n\n500/1000 XP for level 9.");
			} else if (currentPoints === 1000) {
				xpLevel.set(key, ++curLevel, "level");
				return message.reply("Level up, your now level 9: Roast-Champion! <:roast_circle:474755210485563404>\n\n1000/5000 XP for level 10.");
			} else if (currentPoints === 5000) {
				xpLevel.set(key, ++curLevel, "level");
				return message.reply("Level up, your now max level, level 10. Congrats!");
			}
			xpLevel.set(key, curLevel, "level");
		}
		/*
		*
		*   Things to add to rb!level:
		*  ---------------------------
		*  
		*
		*/
		if (message.content.toLowerCase() === prefix + "level") {
			const key = message.author.id;
			let currentPoints = xpLevel.get(key, "points");
			xpLevel.set(key, --currentPoints, "points");
			return message.reply(` You currently have ${xpLevel.get(key, "points")} XP, and are level ${xpLevel.get(key, "level")}! <:roast_circle:474755210485563404>`);
		} else if (message.content.toLowerCase() === prefix + "level help") {
			return message.channel.send("**rb!level help**\n\n`rb!level` is how you check what your current level/XP is. XP is gained by using a `rb!` command.  Levels are gained by gaining enough XP. For information on XP needed to level up look at the XP-System to part of `rb!help`.\n\nExample:\nUSER: rb!level\nRoast-Bot: @USER, You currently have 5 XP, and are level 1! <:roast_circle:474755210485563404>\n\nStill having trouble with `rb!level` or have a suggestion? Join the support server: https://discordapp.com/invite/9y8yV42");
		}
	});
};