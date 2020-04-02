function createcounter(initialval,delta){
    let val = initialval
    function counter(){
        // console.log(val)
        val = val + delta
  
        return val
    }
    return counter
}

let fivecounter = createcounter(5,5)
console.log(fivecounter())
console.log(fivecounter())
console.log(fivecounter())