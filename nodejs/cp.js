const cp = require('child_process')


console.log('output' + cp.execSync('node global.js'))