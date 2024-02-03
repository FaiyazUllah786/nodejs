const fs = require('fs')

//create new directory

fs.mkdirSync('test2_dir')

//read directory

console.log(fs.readdirSync('test_dir'))


//delete directory if is non-empty
fs.rmdirSync('test2_dir', { recursive: true, force: true })



