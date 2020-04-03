// function fun(){
//    return console.log(this==global)
// }
// fun()//true
// new fun()//false ie when new is written this!=global object

function fun(){
    this.p = "something"
    return 10
}

let o1 = fun()
let o2 = new fun()
console.log(o1)//10
console.log(o2)//fun {p="something"}
console.log(o1.p)//undefind
console.log(o2.p)//something
