const figlet = require('figlet')

figlet('This is fist NPM module23479', function (err, data) {
    if (err) {
        console.log("something went wrong!!!")
        console.dir(err)
        return
    }
    console.log(data)
})

//install a node package using command -

//npm i figlet

//import package 

//simply use it 