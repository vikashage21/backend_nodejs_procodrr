// creating a timer by using fs module 
import { writeFile } from 'node:fs/promises'


setInterval(async () => {
    const time = new Date()
    await writeFile('./time.txt', `${time.toLocaleTimeString()}`)

}, 1000)