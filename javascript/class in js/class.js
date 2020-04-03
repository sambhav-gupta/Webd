function Person(name,age){
    this.firstname = name.split(" ")[0]
    this.lastname = name.split(" ")[1]
    // this.age = age
    // let mage = age
    //now age is like a private member//
    this.isadult = function(){
        // return mage>18//p:Person{firstname:john,lastname:smith,function:isadult....no age}
return age>18//p:Person{firstname:john,lastname:smith,function:isadult....no age}
    }
}
let p = new Person("john smith",30)
let h = new Person("harry potter",15)
console.log(p)//Person {firstnae:john,lastname:smith,age:30}
console.log(h)//Person {firstname:harry,lastname:potter,age:15}
console.log(p.isadult())//true
console.log(h.isadult())//false