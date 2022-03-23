// 1- import express
const express = require('express')

// 2 - init express
const app = express()

function logger(req, res, next) {
    // console.log("method : ", req.method)
    // console.log("path : ", req.url)
    if (10 < 5) {
        next()
    } else {
        res.send("Ouuuuuuuuuuuups")
    }
}

app.use(logger)

// 3- create your endpoint
app.get('/', (req, res) => {
    res.send("Welcom to WS-Express")
})

app.get('/post', (req, res) => {
    res.send("Bonjouuuuuuuuuur")
})

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/")
//     // res.sendFile(__dirname + "/public/contact.html")
//     // res.sendFile(__dirname + "/public/services.html")
// })

// app.use(express.static(__dirname + "/public"))

// 4- run server
const port = process.env.PORT || 5000
app.listen(port, err => {
    err ? console.log(err) : console.log(`The server is running on port ${port}`)
})