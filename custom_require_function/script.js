function loader(path) {
    let fs = require('fs')
    let fileData =fs.readFileSync(path).toString()

   return (function(send){
        eval(fileData)
        return send
    })({})


}


let {sum} = loader('./app.js')

console.log(sum(10,20))


// to create a global value in node js 

const vm = require('vm')

vm.runInThisContext('var a = 5')