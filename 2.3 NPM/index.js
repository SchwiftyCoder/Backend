//var generateName = require('sillyname'); //only works for CJS - common javascript
import sillyNameGenerator from "sillyName"
import randomSuperHero from "superheroes"
var sillyName = sillyNameGenerator();
// console.log(sillyName)
for(let i = 0; i < 10; i++){
    console.log(sillyNameGenerator())
}
console.log()
for(let j = 0; j < 5; j++){
    console.log(randomSuperHero.random())
}