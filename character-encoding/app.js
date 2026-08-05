import fs from 'node:fs/promises'


const content = await fs.readFile('text.txt')

let binaryString = ''
content.forEach((el) => {

    binaryString += el.toString(2) + ' '

})
console.log(binaryString)