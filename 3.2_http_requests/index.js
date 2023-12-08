import express, { request } from "express"

const app = express()

//http request to handle client request to the homepage
app.get('/', (req, res) => {
    console.log(req.rawHeaders)
    res.send("sHello world, we are back again!!!, aint nothing stopping us now huh bit...")
})

const portNumber = 3005
app.listen(portNumber, () => {
    console.log(`server up and listeningon port ${portNumber}`)
})