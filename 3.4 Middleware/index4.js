import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url"; 
import random from "random";
import * as emoji from "node-emoji"

//custome globla variable used to define the root file path of our index.html file
const __dirname = dirname(fileURLToPath(import.meta.url));
const rickAndMortyBandNames = [
  "The Schwifty Beats", "Pickle Rick Riffs", "Portal Gun Grooves", "Meeseks Melodies", "Szechuan Serenaders", 
  "Mr. Poopybutthole & The Harmonies", "Galactic Federation Jams", "Blips and Chitz Rhythms", "Dimension C-137 Orchestra", "Wubba Lubba Dub Dub", "The Plumbus Players", "Anatomy Park Acoustics", "The Vindicators Vibrations", "Schmeckles Soundwave", "Interdimensional Cable Tunes", "Beth's Horse Hospital", "The Birdperson Band", "Unity's Harmony", "The Gazorpazorpfield Groove", "Froopyland Folk", "Mr. Meeseeks' Blues", "Tiny Rick's Rockers", "The Squanchers", "Arthricia's Folk Fusion", "The Gearheads", "Krombopulos Michael's Melody", "Abradolf Lincler Jazz", "Purge Planet Punks", "Shrimply Pibbles Band", "The Jerryboree Jam", "The Citadel Swing", "Zeep Xanflorp Funk", "Fart's Musical Mystery", "The Ricks Must Be Crazy", "The Snuffles Synth", "Mortytown Locos", "The Evil Morty Experience", "Doofus Rick Rhythms", "The King Jellybean Jive", 
  "Sleepy Gary and The Parasites", "Pantsless Jerry Blues", "The Get Schwifty Squad", "The Glip Glops", "Flappy Bird Harmonics", "Gwendolyn's Groove", "The Eyehole Man Ensemble", "Gromflomites Grunge", "The Scary Terry Tunes", "Summer and Tinkles Pop", "Screaming Sun Rock"
];


const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true})) //parse the info from the html form
let bandName = "";

//function to generate a random band name from the array and append a random emoji to it
const bandNameGenerator = (req, res, next) => { 
  console.log(req.body.street + " " + req.body.pet)
  let bandNamesSize = rickAndMortyBandNames.length;
  bandName = `Your band name is: <br><h1>${rickAndMortyBandNames[random.int(0, bandNamesSize)] + emoji.random().emoji}</h1>`;
  next();
}

// route handler for home page
app.get('/', (req, res) => { 
  res.sendFile(__dirname + '/public/index.html')
})

// generate a random name
app.use(bandNameGenerator)

// route handler for a post request once the form is submitted
app.post('/submit', (req, res) => {
  res.send(bandName)
})

//invoke the server to start listening on port 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
