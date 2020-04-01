const x = 10;
function myfun(){
   const x=11;
   console.log(x);
   if (true){
       const x = 12;
       console.log(x);
   }
   console.log(x);
}
myfun()
console.log(x);
//block level scoping