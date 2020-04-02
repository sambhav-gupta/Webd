let arr = [5,2,1,3,4]
console.log(arr.sort())//[1,2,3,4,5]
let brr = [1,5,3,2,14,20,4]
// console.log(brr.sort())//[1,14,2,20,3,4,5]
// js by default is lexicographical sort
function compare(a,b){
    return (a%10) - (b%10);
} 
    let sortedbrr = brr.sort(compare)
    // console.log(sortedbrr)//[1,2,3,4,5,14,20] return a-b
    // console.log(sortedbrr)//[20,14,5,4,3,2,1] return b-a
    console.log(sortedbrr)