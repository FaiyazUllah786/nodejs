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

let courses = [
    { id: 1, name: "javascript" },
    { id: 2, name: "java" },
    { id: 3, name: "python" },
]

// app.get('/course/:id', (req, res) => {
//     var param = req.params
//     res.send("contact us at faiyaz.com")
//     console.log(param)
// })

app.get('/course/:name', (req, res) => {
    let course = courses.find(courses => courses.name === req.params.name)

    if (!course) res.status(400).send("Course you're looking for not available")

    res.send(course)
})

//either dynamic port is present or use local port
const port = process.env.port || 3000

app.listen(port, () => console.log('port is running on', port))