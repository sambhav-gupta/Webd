let obj = {
    a: 10,
    b: "Sambhav",
    c: true,
    Afun : function(){
        return (this.a + this.b)
    }
}
console.log(obj.Afun())//10Sambhav
