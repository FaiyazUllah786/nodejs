const path = require('path')

let extension = path.extname('cp.js')

let file = path.basename("cp.js")

console.log(extension, file)

console.log(__filename, __dirname)