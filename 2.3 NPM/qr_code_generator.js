import qr_generator from "qr-image"
import fs from "fs"
import inquirer from "inquirer"
import url_validator from "validator"

inquirer
    .prompt([
        {
            type: 'input',
            name: 'url',
            message: 'Enter the URL to convert to QR code: ',
        },
    ])
    .then((answer) => {
        //we need to validate the URL and then pass it on to the next .then() to generate the QR image
        if (url_validator.isURL(answer.url)) {
            return Promise.resolve(answer.url)
        } else {
            return Promise.reject("Invalid URL") //shift the promise chain to the rejection state to be handled by a .catch()
        }
    })
    .then((valid_url) => { //recieves a new promise object to which we can perform the QR image generation
        var qr_png = qr_generator.image(`${valid_url}`, { type: 'png' });
        //remove any occurences of the prefies and/or suffixes in the url before using it as the file name
        //const fileName = valid_url.replace(/www.|http.|https./g, "").replace(/.edu|.com|.io|.org/g, "");
        const fileName = "zoom"
        qr_png.pipe(fs.createWriteStream(`${fileName}.png`));
    })
    .catch((invalid_url) => {
        console.log(`${invalid_url}\nNo QR image for you. \nGoodbye...`)
    })




