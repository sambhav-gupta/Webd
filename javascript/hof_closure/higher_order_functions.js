function creategreeter(name){
    let firstname = name.split(" ")[0]
    function greeter(){
        console.log("hello " + firstname)
    }
    return greeter
}
let johngreeter = creategreeter("John Doe")
let harrygreeter = creategreeter("Harry Potter")
//calling the greeter function returned 
johngreeter()//hello John
harrygreeter()//hello Harry