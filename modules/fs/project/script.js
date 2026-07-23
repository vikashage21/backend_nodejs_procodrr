import fs from 'node:fs/promises'


const content = await fs.readFile('./index.txt' , 'utf-8')
const wordsCount  = content.split('').length
console.log(wordsCount)