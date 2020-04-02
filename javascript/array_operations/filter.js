let arr = [1,2,3,4,5,6]
let brr = arr.filter(function(item){
    return (item%3)==0//returns those values of arr for which %3==0
})
console.log(brr)//3,6