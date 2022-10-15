const express =  require('express');
const app = express()

const PORT = 3300
const fs = require ('fs')

app.use(express.urlencoded())
app.set('view engine', 'ejs')

app.use(express.static('static'))

app.get("/", (req, res)=>{
    res.render('index')
})

app.get("/movies", (req, res)=>{
    res.render('movies')
})

app.get("/trending", (req, res)=>{
    res.render('trending')
})

app.get("/subscription", (req, res)=>{
    res.render('subscription')
})

app.post("/subscription", (req, res)=>{
    console.log(req.body)
    var user = req.body.username
    var pass = req.body.password
    var mail = req.body.email
    var phone = req.body.contact
    var textmessage = req.body.message

    var newData = `Username: ${user}
Password: ${pass}
E-mail: ${mail}
Contact: ${phone}
Message: ${textmessage}`

    var oldData = fs.readFileSync('userData.txt', 'utf-8')

    var UsersData = `${oldData}
${newData}`

    fs.writeFileSync("userData.txt", UsersData)
    console.log(user, pass, mail, phone, textmessage)
    res.render('subscription')
})



app.listen(PORT)