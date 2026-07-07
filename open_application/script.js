const {exec} = require('child_process')


exec('open ../fs' , (error, stdout, stderr)=>{
    if(error){
        return error
    }
    console.log(stdout)
})