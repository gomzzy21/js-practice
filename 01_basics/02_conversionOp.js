let score = "33"
//we defined score as string //
//if we check the type of score that ll be obviously string//

// now convert that stirng to numer  by conversion operation

const valueInNumber = Number (score); //  conversiion operation

console.log(typeof score);// at this case the score type of is still sting  because we directly taking score here

console.log(score);

console.log(typeof valueInNumber); // but in this case the typeof the score is number now  because we changed the string to number

// that type only if we try to change the values of the perticular data types 

//in that case the result will be like this 

// string ("33ad33") to numer => NaN  // we cant convert charecters into string .
// boolen to number  "its depends upon boolean state " if its true => 1, false =>0
// undefined to number  => NaN
// null to number =>0  bcz its null values is 0 of nothing.


//examples
// "33" =>33
// "abc" => NaN
//true => 1
//false => 0
//undefined => NaN
// null => 0

// we can also convert the stirng ,booleans , object , arrays  byt using their types ex

let number = 33
// now the type of id number 
 const makeInString = String(number)
//now the type of is string
 console.log(number);
 console.log(typeof makeInString);
 
 



