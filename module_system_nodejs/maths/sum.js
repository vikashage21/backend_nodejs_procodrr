function sum(...par) {
    return par.reduce((curr , acc) => curr+acc)
}

module.exports={
    sum
}