let arr = [2, 3, 5, 6]
function digitToDecimal(arr, radix = 10) {
    let num = 0
    for (let i = 0; i < arr.length; i++) {
        num += arr[arr.length - i - 1] * Math.pow(radix, arr.length - i - 1)
    }
    return num
}

let result = digitToDecimal(arr )

console.log(result)