const accountId = 12345
let accountEmail = "anniyan@gmail.com"
var accountPassword = "1122334455"
accountCity = "pune"   // variable can be declared in this way also but its not good in production line or anywhere//

// accountId = 654321 // this cant be excutable because const cant be changed once its assigned 

accountEmail = "annie@annie.com"
accountPassword = "21212121"
accountCity = "bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity]);


// var is  a older version of declaring the variables, in previous its used and there are some draw backs of var due to that and to aviod thise drawbacks  js introduced let in ES6 version ..the drawbacks are block scope or functional scope. so prefer not to use var in future