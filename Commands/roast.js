/*
*
*   Things to add to r!roast:
* ----------------------------
*  More roasts
*
*/

const Discord = require("discord.js");

roasts = [
	{"roast":"Id offer you some gum but your smiles got plenty of it."},
	{"roast":"Repeat After me: semen is not hair gel."},
	{"roast":"Your body fat is about as evenly distributed as wealth in the US economy."},
	{"roast":"Your like dobby from harry potter, only people wont be sad when you die in the seventh book."},
	{"roast":"If I asked you about your cock it wouldnt be a very long conversation."},
	{"roast":"You sound like a founder of a start up company that makes male tampons."},
	{"roast":"You have the kinds of looks that make people talk about your personality."},
	{"roast":"You look like what happens when you press random on the charecter creation menu."},
	{"roast":"You look like the after picture of a meth ad."},
	{"roast":"Even the shower doesnt want to see you naked."},
	{"roast":"I bet you wear a nose ring because no one wants to put one on your finger."},
	{"roast":"You must hear \"lets be friends often\" I mean \"lets be cousins\" alot."},
	{"roast":"When the airforce needs extra landing space they should just rent out your forehead."},
	{"roast":"If laughter is the best medicine, your face must be curing the world."},		{"roast":"If I wanted a bitch Id have bought a dog."},
	{"roast":"The only way you will ever get laid is if you crawl up a chickens ass and wait."},
	{"roast":"It looks like your face caught fire and someone tried to put it out with a hammer."},
	{"roast":"Your family tree must be a cactus because everyone on it is a prick."},
	{"roast":"Save your breath - youre going to need it to blow up your date."},
	{"roast":"Your proof evolution can go in reverse."},
	{"roast":"When you were born, the doctor came out to the waiting room and said to your dad, \"I'm very sorry. We did everything we could. But he pulled through.\""},
	{"roast":"You've got less meat in your pants than there is in a vegetarian restaurant."},
	{"roast":"I wasn't born with enough middle fingers to let you know how I feel about you."},
	{"roast":"Your birth certificate is an apology letter from the condom factory."},
	{"roast":"You're about as useful as a vibrator with no batteries."},
	{"roast":"Fake hair, fake nails, fake smile. Are you sure you weren't made in China?"},
	{"roast":"Mirrors can't talk, and lucky for you they can't laugh either."},
	{"roast":"I'd say you're funny, but looks aren't everything."},
	{"roast":"You must have been born on a highway because thats where most accidents happen."},
	{"roast":"When I see your face theres not a thing I would change... Except for the direction im walking in."},
	{"roast":"Your so ugly when you popped out the doctor said aww what a treasure and your mom said yeah lets bury it."},
	{"roast":"I hear when you were a child your mother wanted to hire somebody to take care of you, but the mafia wanted too much."},
	{"roast":"You're so fat the only letters of the alphabet you know are KFC."},
	{"roast":"The only positive thing about you is your HIV status."},
	{"roast":"You're like STDs, nobody wants you, everyone hates you and it proves your parents should have used protection."},
	{"roast":"The only way I'd lay naked with you would be in a mass grave."},
	{"roast":"You're the cum your mother should have swallowed."},
	{"roast":"I heard your mom got fired from her job at the sperm bank - the boss caught her drinking on the job."},
	{"roast":"You should wear a condom on your head because if you're gonna act like a dick you might as well dress like one!"},
	{"roast":"Twinkle twinkle little star, I want to hit you with my car, Throw you off a cliff so high, I hope you break your neck and die."},
	{"roast":"Some babies were dropped on their heads but you were clearly thrown at a wall."},
	{"roast":"Roses are red, shit is brown, shut the fuck up, and sit the fuck down."},
	{"roast":"Fashion Tip 101: You only need to wear one pair of socks at a time and they belong on your feet not in your bra."},
	{"roast":"I see you were so impressed with your first chin that you added two more."},
	{"roast":"Twinkle twinkle little whore, close your legs, they're not a door."},
	{"roast":"I guess those penis enlargement pills are working - you're twice the dick you were yesterday!"},
	{"roast":"Twinkle Twinkle little slut, name a guy you haven't fucked, was he skinny, was he tall, Nevermind you did them all."},
	{"roast":"I failed a spelling test because they asked me how to spell 'bitch' and I wrote down your name."},
	{"roast":"You're like a light switch, even a little kid can turn you on."},
	{"roast":"I don't see any penises in the general vicinity... So I'm wondering why you keep opening your fucking mouth."},
	{"roast":"Who lit the fuse on your tampon?"},
	{"roast":"I thought bra's are meant for boobs not tissues."},
	{"roast":"Twinkle twinkle little slut, You like dick inside your butt."},
	{"roast":"The last time I saw a face like yours I fed it a banana."},
	{"roast":"Roses are red, violets are blue. I have five fingers and the middle one is for you."},
	{"roast": "I'd like to kick you in the teeth but why improve your looks?"},
	{"roast": "At least there's one good thing about your body. It isn't as ugly as your face."},
	{"roast": "Your the reason the gene pool needs a lifeguard."},
	{"roast": "Your not yourself today, I noticed the improvement immediately."},
	{"roast": "You\'re the reason your dad drinks."},
	{"roast": "Is your butt jealous of the amount of shit that just came out of your mouth?"},
	{"roast": "You\'d be suicidal if you felt as bad as you look."},
	{"roast": "Your lips keep moving but I don\'t speak stupid."},
	{"roast": "Calling you an idiot would be an insult to all stupid people."},
	{"roast": "Brains aren\'t everything, in fact in your case their nothing."},
	{"roast": "I know your not as stupid as you look, Nobody could be!"},
	{"roast": "Did you parents have any children that lived?"},
	{"roast": "You\'re kind of like Rapunzel except instead of letting down your hair, you let down everyone in your life."},
	{"roast": "You have more dick in your personality than you do in your pants."},
	{"roast": "I\'m sorry your dad beat you instead of cancer."},
	{"roast": "You should put a condom on your head, because if you\'re going to act like a dick you better dress like one, too."},
	{"roast": "You\'re so fat you need cheat codes to play Wii Fit."},
	{"roast": "The only thing that goes erect when I'm near you is my middle finger."},
	{"roast": "Stop bullying fat people, they have enough on their plate."},
	{"roast": "If I were your mirror I would commit suicide."},
	{"roast": "Being a dick to everyone won\'t make yours any bigger."},
	{"roast": "Your face could scare the shit out of a toilet."},
	{"roast": "They say people get what they deserve. In your case it\'s a participation trophy."},
	{"roast": "Anyone willing to fuck you is just too lazy to masturbate."},
	{"roast": "Your so stupid I don\'t have the time or the crayons to explain this to you."},
	{"roast": "Your face looks like something I would draw with my non dominant hand."},
	{"roast": "If my dog had your face I would shave his ass and teach him to walk backwards."},
	{"roast": "If your IQ was multipled by anything it would still be 0."},
	{"roast": "At least Hitler killed himself."},
	{"roast": "I\'d agree with you but then we\'d both be wrong."},
	{"roast": "When you were born your mom threw you out the window and the window threw you back."},
	{"roast": "Your about as usefully as Anne Franks drumset."},
	{"roast": "Did your parents ever ask you to run away from home?"},
	{"roast": "I would burn you but burning trash is bad for the environment."},
	{"roast": "I haven\'t seen you run that fast since Twinkies went on sale!"},
	{"roast": "You were so ugly that when you were born the doctor put tinted windows on your incubator."},
	{"roast": "Everything that comes out of your mouth is a lie, everything that goes in is a cock."},
	{"roast": "I heard you received a brain transplant but it rejected your body."},
	{"roast": "I might as well call you Bride to Terabithia because you make children cry."},
	{"roast": "The only reason your partner likes your dick is because they were taught to enjoy the little things in life."},
	{"roast": "Someone once said your as pretty as a picture... I agree I would love to hang you."},
	{"roast": "Your like Mondays, everyone hates you."},
	{"roast": "The 80\'s called, they want their haircut back."},
	{"roast": "You must\'ve been born at a pound because your a son of a bitch."},
	{"roast": "It\'s better to let someone think you are an idiot then to open your mouth and prove it."},
	{"roast": "I guess you prove that even god makes mistakes sometimes."},
	{"roast": "I\'m jealous of people that don\'t know you!"},
	{"roast": "You\'re so dumb that you got hit by a parked car."},
	{"roast": "I bet your brain feels as good as new, seeing that you never use it."},
	{"roast": "What\'s the difference between you and eggs? Eggs get laid and you don\'t."},
	{"roast": "If you\'re gonna be a smartass, first you have to be smart. Otherwise you\'re just an ass."},
	{"roast": "At least when I do a handstand my stomach doesn\'t hit me in the face."},
	{"roast": "I don\'t exactly hate you, but if you were on fire and I had water, I\'d drink it."},
];

exports.run = async (message) => {
    if (message.content === "r!roast") {
        const random_roasts = Math.ceil(Math.random() * 108);
        return message.channel.send(roasts[random_roasts - 1].roast + `\n **Roast #${random_roasts}** <:roast_circle:474755210485563404>`);
    } else if (message.content.startsWith("r!roast ")) {
        const random = Math.ceil(Math.random() * 108);
        const word = message.content;
        const reply = word.slice(8, word.length);
        if (message.content.startsWith("r!roast #")) {
            let word1 = message.content;
            let number1 = word1.slice(9, word1.length);
            let number_int = parseInt(number1);
            return message.channel.send(roasts[number_int - 1].roast + `\n **Roast #${number_int}** <:roast_circle:474755210485563404>`);
        }

        return message.channel.send(reply + ", " + roasts[random - 1].roast + `\n **Roast #${random}** <:roast_circle:474755210485563404>`);
    }
}