function createcounter(initval , delta){
    let val = initval
    let counter = {
        incr : function(){
            val++;
        },
        decr : function(){
            val--
        },
        show: function(){
            console.log(val)
        }
    }
    return counter
}   
let a = createcounter(50,5)
a.show()//50
a.incr()
a.incr()
a.show()//52
console.log(typeof a)//object
console.log(typeof a.show)//fuction
console.log(typeof a.show())//52,undefined