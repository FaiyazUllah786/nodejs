const express = require('express')

const morgan = require('morgan')

const app = express()


const customMiddleWares = require('../middle_wares/middle.js')

app.use(express.json())

app.use(customMiddleWares.myMiddleWare1)

app.use(customMiddleWares.myMiddleWare2)

//third party middleware eg- morgan gives information of every req,res

app.use(morgan())

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

app.get('/courses', (req, res) => {
    res.send(courses)
})

//post()
//adding courses in course list

//always send response back and use app.use(express.json())

app.post('/add', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    console.log(courses)
    res.send(course)

})
//put()

app.put('/course/:courseName', (req, res) => {
    const courseName = req.params.courseName
    let course = courses.find(course => course.name === courseName)
    if (!course) res.status(400).send("The course you're looking for does not exist!")

    course.name = req.body.name
    res.send(courses)
})


//delete()

// app.delete('/delete/:courseName', (req, res) => {

//     const courseName = req.params.courseName
//     let course = courses.find(course => course.name === courseName)
//     if (!course) res.status(400).send("The course you're looking for does not exist!")

//     const updatedList = courses.filter(course => course.name != courseName)
//     courses = updatedList
//     res.send(courses)

// })

app.delete('/delete/:courseId', (req, res) => {

    const courseId = req.params.courseId
    let course = courses.find(course => course.id === parseInt(courseId))
    if (!course) res.status(400).send("The course you're looking for does not exist!")

    let idx = courses.indexOf(course)
    courses.splice(idx, 1)
    res.send(courses)

})

//either dynamic port is present or use local port
const port = process.env.port || 3000

app.listen(port, () => console.log('port is running on', port))