function greeter(){
    console.log("hello")
}
let hellosayer = greeter ;
// console.log(hellosayer == greeter) //true therefore hellosayer becomes a function as greeter
hellosayer()//hello
greeter()//hello

