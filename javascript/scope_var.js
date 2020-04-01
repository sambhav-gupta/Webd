var x = 10
function myfun(){   
    var x = 20;
    x +=1;
    console.log(x)//21
    if(true){
        var x = 30;
        x+=1;
        console.log(x);//31
    }
    console.log(x);//31
}
myfun()
//console.log(x);//11 ie scope of x is accessible by myfun when there is no other var x in myfun
//console.log(x);// 10 when there is another var x = 20 in myfun
console.log(x);//10
// function level scoping

