// import {writeFile, readFile} from 'node:fs/promises';

// const contentRead= await readFile('./gdj-social-media-3846597_1920.png')
// console.log(contentRead)
// writeFile('./copy.png' , contentRead)



import { write } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'

const filePath = process.argv[2]
const copyPath = process.argv[3]

if (!filePath || !copyPath) {
    throw new Error('please provide file path')
}

const content = await readFile(filePath)

 writeFile(copyPath, content)
console.log('file copied')