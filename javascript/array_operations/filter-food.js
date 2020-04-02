let menu = ["Paneer Tikka","Garlic Naan","Onion Rings","Chicken Tandoori","Egg curry"]

function isveg(food){
    if(food.toLowerCase().indexOf("chicken")!=-1){return false}
    if(food.toLowerCase().indexOf("egg")!=-1){return false}
return true
}
function isjain(food){
    if(food.toLowerCase().indexOf("onion")!=-1){return false}
    if(food.toLowerCase().indexOf("garlic")!=-1){return false}
return true
}
let vegmenu = menu.filter(isveg)
let jainmenu = menu.filter(isjain).filter(isveg)
console.log(vegmenu)//paneer tikka,onion rings,garlic naan
console.log(jainmenu)//paneer tikka
