console.time() // staring time
for(let i = 0 ; i<10000000000; i++){
    if(i%400000==0){
        console.log(i)
    }
}

console.timeEnd()