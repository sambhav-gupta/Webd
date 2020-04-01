let str = "abcdabcd"
console.log(str.indexOf("a"))// output = 0 as index of a is 0
console.log(str.indexOf("a",2))//index of a after 2 ie abcd(a) ==4
console.log(str.substr(3))// dabcd ie string after index 3 is displayed
console.log(str.substr(3,4))// dabc cut till 3 ie abc and then cut after 4 from 3 ie cut d and displays left part ie dabc
console.log(str.substring(3))// dabcd same as substr
console.log(str.substring(3,4))// displays abcd - abc
console.log(str.slice(3,4))//slices part btw 3 and 4 ie same as substring
/// diff btw slice and subtsring :
console.log(str.substring(-4,-3));//empty
console.log(str.slice(-4,-3));// a : slices from back ie dcba - dcb = a
console.log(str.split('a'))// array ['' , 'bcd' ,'bcd'] ['part before first a','pasrt after first a,'part after second a' ]





