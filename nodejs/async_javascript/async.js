
function placeOrder(order) {
    return new Promise((resolve, reject) => {
        if (order === 'coffee') {
            resolve('Order is placed')
        } else {
            reject('Order is rejected')
        }
    })
}

function processOrder(orderPlaced) {
    return new Promise((resolve, reject) => {
        if (orderPlaced === 'Order is placed') {
            resolve('Order is processed')
        } else {
            reject('Order is rejected')
        }
    })
}

//by promise resolution


// placeOrder('coffee').then((orderPlaced) => {
//     return processOrder(orderPlaced)
// }).then((processOrder) => {
//     console.log(processOrder)
// }).catch((err) => {
//     console.log(err)
// })

//by using aync and await

async function placeOrderAsync(order) {
    try {
        let data = await placeOrder(order)
        console.log(data)
        let serve = await processOrder(data)
        console.log(serve)
    } catch (err) {
        console.log(err)
    }

}

placeOrderAsync('coffee')