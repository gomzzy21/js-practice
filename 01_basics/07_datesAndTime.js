let myDate = new Date()
console.log(myDate);
//in this it ll provide date but in unreadable format  to avoid this there arwe many menthos in js date

console.log(myDate.toString());
//it ll give you readable dates and time  with timze-zone

console.log(myDate.toDateString());
//it ll give  day month date and year format 

console.log(myDate.toISOString());
//it ll give  year month  date time minutes and milisecond

console.log(myDate.toJSON());
// itd give u same as above

console.log(myDate.toLocaleDateString());
//it ll give month/day/year in this esay readable format 


//we can also give our preferance of the date we requried  like 

const dates = new Date( 2024, 0, 19, 5, 3 )
console.log(dates.toLocaleString());
// its like month/date/year , hours :minutes : seconds with AM or PM,

const dates1 = new Date( "2024-01-18")
console.log(dates1.toLocaleString());


//there are timestapzones also it always give the time in milissecond from its generate  like

const myTimeStamp = Date.now()
console.log(myTimeStamp);
//its give us milisecond value from where it launched  and its diffiult a take the the value from this  but we can do this 

 // we can take one any date as referance o make understan  like exapmle we take the previous used date only "dates1"

 console.log(dates1.getTime());

//ll get both the values in miliseconds to covert that dates1 value  into second we multiply by 1000
 
//notes its used when hotel booking , plane booking .to check the timing in that cases its used

//notes comparisson always shoud done in miliseconds only 
// to convert these milisecond in second we multiplyby 1000 but it ll give us decimal values , to convert that into round figure  we use math.floor or math.random

// like this 
 
console.log(dates1.getTime()/1000);

// there are manymethods in dates js ll see those

let newDate = new Date()
console.log(newDate);
console.log(newDate.getday);
//this kind methods are there like getDate,getTime,GetMonth,GetYEar like this 


// there is main used method 

newDate.toLocaleString('default',{
    weekday:"long",
})

//by this to localstings  we can give multiple parameter also  and in object we can acess  weekday, timexone, month,years and everything 