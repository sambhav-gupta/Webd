let arr = [100,200,300,400]
let brr = arr.map(function(item){
    return 100 - item
})
console.log(brr)//[0,-100,-200,-300]
let crr = arr.map(function(item){
    return  item*item
})
console.log(crr)//10000,40000,90000,160000
let drr = crr.map(Math.sqrt)//square root of all items of crr
console.log(drr)//100,200,300,400


