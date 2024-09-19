const score = 400;
//we declared a number variable here in normal way

//console.log (score)
// consloing for checking either its working or not 

const balance = new Number(200)
// this is strict way to declare a variable in perticular dataTypes. in this way its considered as number only.

//console.log(balance);
// by using this we can get the number methods to use in future , like (toString,toFixed,toPrecisson) these kind methods will get 

//example
//console.log(balance.toString());
// this ll covert the number into string datatype.

//console.log(balance.toFixed(2));
// this ll help us to control the precission value. mostly used  while building the ecommerce applicatiion that time.  to control the after decimal vaules after the calculation like gst, discount,etc,

const gamePoint = 33.4532
//console.log(gamePoint.toPrecision(3));

//it ll basically used when we direcly get the decimal value . so buy using this precission methos we can control the lenght of this variable. and it ll give us almost roundfigure value,

// giving 3 as parameter to the method it give us o/p like 33.5 ,it consider 3 numbers and henceforth it convert left numbers to round figure

const sal = 3002000000;
// in this case its difficult to count the interger sal. so that we can use a inbuild method localstring, it convert the long interger into readable format,

//console.log(sal.toLocaleString()); 
// deafualt it takes a US currancy standards.

//console.log(sal.toLocaleString('en-IN'));
// this ll convert the integer into indian currency format.


//++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++//

//there are many methos in maths in js . basically we use these in many situaions 
//example

console.log(Math.abs(-50));
// it ll convert the negative value into positive value.

console.log(Math.round(4.2)); 
//it ll basically and most used method in maths  to convert the decimal value into round figure.

console.log(Math.ceil(4.2));
//it ll give choice to make it round in higher number only even its small decimal .

console.log(Math.floor(4.9));
//like above one it ll give ud choice to rounf it in lower side only even the decimal is higer .

//like this there are many methods in math like 

// Math.min() it filters the lowest in the given the array
//Math.max() it filters the largest numbers from the given array.

//but the most used Math function is Math. random().
 console.log(Math.random());
 //it always give a different different value inbetween 0 to 1

 console.log(Math.random()*10 + 1);
//math.random ll always give values from 0 to 1 . so make it 0 to 10  we multiple by 10. but it can give o.o1 also so to avoid 0 we can add 1 . by this we get the values from 1 to 10

console.log(Math.floor(Math.random()*10)+1);

// in some cases we perticualry need certain range of values only  to do that we have one trick
// first we decalred two varibales min and max  it ranges from where to where we need values

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * min + 1) + min);

// in above syntax math.floar will round of the value to lowest.
//Math.random ll generate the value from 0 to 1
// multiplying that with min because to get 0 to 10 values  and adding 1 is to avoid 0
//again adding that hole value into min because to get minimum value 


 
 










