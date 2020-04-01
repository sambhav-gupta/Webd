// We can create objects in js without making class also  //
let obj = {
    a: 10 ,
     b: "hello" ,
      c: true,
      d : {
          p:20,
          q:30,
          r:{
              x: "value"
          }

      }
}
console.log(obj.a)// 10
console.log(obj.b)// hello
console.log(obj.c)// true
console.log(obj.d.p)// 20 this is object in an object
console.log(obj.d.r.x)// value ... this is object in an object in an object
obj.l = 1111;//new property added to object obj
console.log(obj.l)//1111
delete obj.b;
console.log(obj)// b is deleted
