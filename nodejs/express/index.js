const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Hello world!!!")
})

app.get('/about', (req, res) => {
    res.send("this is about page")
})

app.get('/home', (req, res) => {
    res.send("this is home page")
})


//routes

app.get('/course/:id', (req, res) => {
    var param = req.params
    res.send("contact us at faiyaz.com")
    console.log(param)
})

//either dynamic port is present or use local port
const port = process.env.port || 3000

app.listen(port, () => console.log('port is running on', port))