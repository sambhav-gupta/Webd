let x = 10
function myfun(){   
    let x = 20;
    x ++;
    console.log(x)//21
    if(true){
        let x = 30;
        x+=1;
        console.log(x);//31
    }
    console.log(x);//21
}
myfun()
//console.log(x);//11 ie scope of x is accessible by myfun when there is no other let x in myfun
//console.log(x);// 10 when there is another let x = 20 in myfun
console.log(x);//10
// block level scoping

