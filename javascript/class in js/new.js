function Fruit(color,taste){
    this.color = color
    this.taste = taste

}
let orange = new Fruit("orange","sour")
let apple = new Fruit("red","sweet")
let mango = {
    color:"yellow",taste:"sweet"
}
console.log(orange)//Fruit {color:'orange' , taste:'sour'}
console.log(apple)//Fruit {color:'red',taste:'sweet'}
console.log(mango)//{color:'yellow',taste:'sweet'}
console.log(this)//{}
