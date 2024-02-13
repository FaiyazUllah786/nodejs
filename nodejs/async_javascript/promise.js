//how to produce a promise

let promise = new Promise((resolve, reject) => {
    let a = 5;
    let b = 4;
    if (a === b) {
        resolve('number is equal')
    } else {
        reject('number is not equal')
    }
})
let ans;
promise.then((res) => {
    ans = res
    console.log(ans)
}).catch((err) => {
    console.log(err)
})

console.log(ans)