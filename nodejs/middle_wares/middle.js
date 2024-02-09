//middlewares is nothing but a function/module passing from start to end of a particular task
//most common middle ware is requrest response middle ware

//req -> route -> res

//and req -> json -> route -> res

//custom middlewares

function myMiddleWare1(req, res, next) {
    console.log("It is a custom middle ware 1")
    next()
}

function myMiddleWare2(req, res, next) {
    console.log("It is a second middle ware 2")
    next()
}

module.exports = {
    myMiddleWare1: myMiddleWare1,
    myMiddleWare2: myMiddleWare2
}