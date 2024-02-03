const fs = require('fs')

//read file is platform-specific use encoding option according to the file

let fileContent = fs.readFileSync('f1.txt', "utf-8")

console.log(fileContent)
//write file
fs.writeFileSync('f2.txt', "This is file 2.")


console.log("file written sucessfully->", fs.readFileSync('f2.txt', "utf-8"))

//update file

fs.appendFileSync('f2.txt', "append the data")


console.log('file is updated->', fs.readFileSync('f2.txt', "utf-8"))

//delete file

fs.unlinkSync('f2.txt')

console.log('f2.txt is successfully deleted')
