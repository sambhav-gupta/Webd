let arr1 = [1,2,3,4]
console.log(arr1)// [1,2,3,4]
// arrays are non homogenous because itys element can be of any type :
let arr2 = [1,2,"abc",true,4,5]
console.log(arr2);//[1,2,"abc",true,4,5]
console.log(arr2[2]) // abc

let twodarr = [[1,1],[2,2],[3,3]]
console.log(twodarr)//[[1,1],[2,2],[3,3]]  1 1
                                          // 2 2
                                          // 3 3
console.log(twodarr[0][0])//1
console.log(twodarr[0][1])//1
console.log(twodarr[0][2])// undefined
console.log(arr1.join('-'))// string "1-2-3-4"
let arr3 = [1,2,3,4,5,6];
console.log(arr3.slice(3,4))//4 .. does not cut the array actually
console.log(arr3.splice(2,3))// cuts  2 postions and returns 3 postions 3,4,5  after 2
console.log(arr3)// actually cuts 3 positions 3,4,5 ie output is 1,2,6
// slice(x,y) x = first pos y = last pos
// splic(x,y) x = first pos y = length
