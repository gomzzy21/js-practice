//arrays

const myArr =[0, 1, 2, 3, 4, 5,]
console.log(myArr);

// its basic way to  declare arr

// we can declare like this also
const myArr2 = new Array(1, 2, 3, 4, 5,)
// in this ways also we can declare a arrys


////arrays methods 

myArr.push(6)
console.log(myArr);
//it ll push the  num,ber into the main arry from last.
myArr.pop()
//it ll remove the last value fromt he array


myArr.unshift(9)
// it ll add the values to start point and shift all reamaining one by one ,

//but its good to use when array size is smaller , when its big arrys wecant use this it take more time to shiting and optimization

myArr.shift()
//it ll remove the start item from the array

console.log(myArr.includes());
//it ll compair the vaslues either it have this value or not 

console.log(myArr.indexOf());
//if ll send ypou the index position of the array

const newArr = myArr.join()
//this join method ll covert the arrays into strings and bind them together

console.log(myArr);
console.log(newArr);

//slice and splice 

console.log("A ",myArr);
//  for undersatnding purpose  we add "A there "

const myn1 = myArr.slice(1, 3)
//it ll only show us the given range array but it always ignore last mnumbr 

console.log(myn1);

//output is like [1, 2]
console.log("b ",myArr);
// nut in this  the original array ll same as before it woundt change after slice operation


const myn2 = myArr.splice(1, 3);
//in this also same but it ll acess the values from satrt to end point . it wont ignore last value 
console.log("c ",myArr);
// the output is like [ 1, 2, 3]
console.log(myn2);
// when we print the original array after aplice operation it changed ,now the original array like [0, 4, 5 ]. it ll show the reaimign values of the array





