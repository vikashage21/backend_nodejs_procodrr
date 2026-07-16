console.log(import.meta)
// import.meta is object contains resolve function and url and node js add the dirname and filename properties into it

const {dirname , filename} = import.meta


console.log(dirname , filename)