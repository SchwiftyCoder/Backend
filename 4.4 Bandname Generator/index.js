import express from "express"
import randomer from "random"

const app = express()
const port = 3000
const bandNamesWithEmojis = {
    "Schwifty Knights": "🚀",
    "Pickle Grails": "🥒",
    "Holy Meeseeks": "👻",
    "Galactic Pythons": "🐍",
    "Lumbering Ricks": "🪵",
    "Silly Walks in Space": "👣",
    "Ministry of Interdimensional Affairs": "🌌",
    "Squanching Coconuts": "🥥",
    "Nihilo-Rick Philosophers": "🤔",
    "Dead Parrot Society": "🦜",
    "Morty's Spam": "📧",
    "Mr. Creosote's Adventures": "🍔",
    "Rick's Argument Clinic": "🗣️",
    "Flying Ricks": "🛸",
    "Wubalubadub Knights": "🛡️",
    "The Spanish Inquisition": "🕵️‍♂️",
    "Mr. Poopybutthole's Circus": "🎪",
    "Pythonian Portal Jams": "🎵",
    "Szechuan Ministry": "🍜",
    "The Life of Brian in C-137": "🧬",
    "Flesh Wound Ricks": "🩹",
    "Morty Python's Flying Circus": "🎪",
    "Gazorpazorp Grail": "🏆",
    "Gumbys of the Galaxy": "🪐",
    "Killer Rabbit of Caerbannog": "🐰",
    "Birdperson's Lumberjack Song": "🪓",
    "Galactic Fish Slapping": "🐟",
    "The Holy Morty": "🙏",
    "Spam, Eggs, Sausage, and Rick": "🍳",
    "Vindicators of the Round Table": "🔮",
    "Cheese Shop on C-137": "🧀",
    "The Knights Who Say Ni-ck": "🗣️",
    "Rick's Funniest Joke": "😂",
    "The Crunchy Frog": "🐸",
    "Black Knight's Portal Gun": "🔫",
    "Nudge Nudge, Wink Wink, Squanch Squanch": "😉",
    "The Galaxy's Silly Walks": "🚶‍♂️",
    "Mr. Meeseeks' Holy Hand Grenade": "💣",
    "The Ministry of Silly Ricks": "👑",
    "Giant Space Foot": "🦶",
    "Always Look on the Bright Side of Blips": "💡",
    "The Ex-leper Morty": "🧟",
    "The Lumbering Rick": "🌳",
    "Twit of the Year Show": "🤪",
    "How Not To Be Seen in the Multiverse": "👁️",
    "The Argumentative Meeseeks": "🗯️",
    "Pet Shop on Gazorpazorp": "🐾",
    "The Four Yorkshire Ricks": "🎩",
    "Vindicators' Cheese Shop": "🛒",
    "Patsy's Coconuts and Plumbuses": "🥥"
};


// middleware call to serve static files from the public directory. 
app.use(express.static("public"))


app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/generate", (req, res) => { 
    const bandName = Object.keys(bandNamesWithEmojis)[randomer.int(0, 49)]
    console.log(bandName)
    console.log(bandNamesWithEmojis[bandName])
    res.render("index.ejs", {
        bandName: bandName,
        bandEmoji: bandNamesWithEmojis[bandName]
    })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})