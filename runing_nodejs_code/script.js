const fs = require('fs');
// reading the file text.txt and it will return buffer data - binary 
const text = fs.readFileSync('./text.txt')
console.log(text.toString())