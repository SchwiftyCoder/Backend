import express from "express" 

const dailyAdvise = () => {
    const daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    //get day of week
    const d = new Date() //current day of the week
    day = daysofWeek[d.getDay()] 
    switch (day) {
        case "Monday":
            return "Start your week with a positive mindset!";
        case "Tuesday":
            return "Keep the momentum going!";
        case "Wednesday":
            return "Mid-week - time to assess and adjust if needed.";
        case "Thursday":
            return "Stay focused, the weekend is almost here.";
        case "Friday":
            return "Finish the week strong!";
        case "Saturday":
            return "Relax and recharge your batteries.";
        case "Sunday":
            return "Plan and prepare for the upcoming week.";
        default:
            return "Please enter a valid day of the week.";
    }
}

const port = 3000
const app = express()
var day
const advise  = dailyAdvise() 
//set the view templating engine to ejs
app.set("view engine", "ejs")

//route handler for the home page
app.get("/", (req, res) => {
    res.render('index', { 
        dayName: day,
        dayAdvise: advise,
    });
}) 

app.listen(port, () => {
    console.log(`server running on 127.0.0.1:${port}`)
})