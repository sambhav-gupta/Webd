let p = {
    a: 10
}
let q = Object.create(p)
q.b = 20
let r = Object.create(q)
r.c = 30
console.log(p)//{a:10}
console.log(q)//{b:20,__proto__p{a:10}}
console.log(r)//{c:30,__proto__q{b:20,prto p{a:10}}}
console.log(r.a)//10
console.log(r.b)//20
console.log(r.c)//30