let myYouTubeName = "annie@danzdotcom"
//we declared a variable here. if we want to access it by using a name myYouTubrName it ll console annie@danzdotcom.. 

let myAnotherYouTubeName = myYouTubeName
//again we created a another variable as (myAnotherYouTubeName) ans asinged a previous variable name to it . now it ll also return the same output as (annie@danzdotcom) ..
console.log(myYouTubeName);
console.log(myAnotherYouTubeName);

myAnotherYouTubeName = "gomzy@techdotcom"
// here we assigned a new value to the myAnotherYouTubeName as gomzy@techdotcom.. 
// if now we try to access the value of both thre variables now it gives us a different variable .

console.log(myYouTubeName);// here the output ll be same as it was before
console.log(myAnotherYouTubeName);// but here it ll changed now the output ll be new one gomzy@techdotcom.//

//Note//
// why its like means because these variables are primitive type data types..
// these primitive datatypes alwaysa store in stack memory location . 
//so when we try to change the varibale name by using another variale name it send a copy of a original varibale to read the data .

//there id another type of memory location is Heap 

const annie01 ={
    id: 123 ,
    email :"annie@gangdotcom",
    phoneNo : 7272727272

}
//declared the object  .

console.log(annie01.email);

// if we want to access the anyone value form the object than we use ' . ' method

// but if we want to  access multiple values from object than we to destructure the object first and   
const {id,email,phoneNo} =annie01;

// after that we call all values by using template litterals like "name:${name}"
console.log(`ID:${id}, 
email:${email},
phoneNo:${phoneNo}`)
//  now lets come to point . object and arrays are basically store in heap memory location.basically its like open container type. 

// example

 let annie02 = annie01 // again declaring a varibale using another varibale vaules but this time we are workig with the object type datatypes. in this case it ll give reference so using that it can  aceess  the values 

annie02.email = "anniwqdatcom"  // by using . operation we changing the values of email. it will change it in bot annie01 and annie02 . because its basically take the referance of originaly value so it ll change it in.

console.log(`id:${id},email:${email},phoneNo:${phoneNo}`)

console.log(annie02)
console.log(annie01)