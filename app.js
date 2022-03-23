const express = require('express')

const app = express()

app.use(express.json())

let users = [
    { name: "Amine", email: "amin@gmail.com", id: 1 },
    { name: "Yassin", email: "yassin@gmail.com", id: 2 },
    { name: "Hela", email: "hela@gmail.com", id: 3 },
    { name: "Wided", email: "wided@gmail.com", id: 4 },
]

app.get('/', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    let id = +req.params.id
    let user = users.find(el => el.id === id)
    res.send(user)
})

app.post('/users', (req, res) => {
    let newUser = { ...req.body, id: Math.random() }
    users.push(newUser)
    res.send(users)
})

app.delete("/users/:id", (req, res) => {
    let id = +req.params.id
    users = users.filter(el => el.id !== id)
    // res.send(users)
    res.status(200).json({msg:"User deleted with success", users})
})

app.put('/users/:id', (req, res)=>{
    let id = Number(req.params.id)
    users = users.map(el=>el.id===id?{...el, ...req.body}:el)
    res.status(200).json({msg:"User updated with success", users})
})


const port = process.env.PORT || 6000
app.listen(port, err => {
    err ? console.log(err) : console.log(`The server is running on port ${port}`)
})