import fs from 'node:fs/promises'

const fileName = process.argv[2]

const word = process.argv[3]

const content = await fs.readFile(fileName, 'utf-8')
const splitArr = content.split(' ')
let obj = {}
for (let i = 0; i <= splitArr.length - 1; i++) {
    let count = splitArr.filter((words) => splitArr[i] === words)
    obj[splitArr[i]] = count.length
}

if (word) {
    for (const w in obj) {
        if (w == word) {
            console.log(`your word is ${word} and count value is ${obj[w]}`)
        }
    }
} else {
    console.log(obj)
}
