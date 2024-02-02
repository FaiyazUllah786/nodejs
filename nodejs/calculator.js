function add(a, b) {
    console.log(a + b)
}

function sub(a, b) {
    console.log(a - b)
}

function mul(a, b) {
    console.log(a * b)
}

function div(a, b) {
    if (b > 0) {
        console.log(a / b)
    } else {
        console.log("undefined")
    }
}


module.exports = {
    addition: add,
    substraction: sub,
    multipication: mul,
    division: div
}