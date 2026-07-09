const fs = require('fs')
// reading .env file by using fs modules

let data = fs.readFileSync('./.env')

// handling buffer data

const val = data.toString()

// splitting data by new line

let splitedvalue =val.split('\n')

splitedvalue.forEach((vals) => {
    let variable = vals.split('=')
    let [key, values] = variable;
    process.env[key] = values

})

console.log(process.env)