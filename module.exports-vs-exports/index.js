console.log(module.exports === exports)


const user ={
    name :"vikash"
}


let userName =  user.name

console.log(userName === user.name)


let testing = module.exports

testing = {
    user
}


console.log(testing)
