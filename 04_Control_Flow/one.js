

// if 

// const isUserLoggendin = true
// if (isUserLoggendin) {
//     console.log("Yeh sahi hai");
// }else{
//     console.log("Yahoo baba");
// }

// Comparison Operators 

// equal to	x == 8	false	
// x == 5	true	
// x == "5"	true	
// ===	equal value and equal type	x === 5	true	
// x === "5"	false	
// !=	not equal	x != 8	true	
// !==	not equal value or not equal type	x !== 5	false	
// x !== "5"	true	
// x !== 8	true	
// >	greater than	x > 8	false	
// <	less than	x < 8	true	
// >=	greater than or equal to	x >= 8	false	
// <=	less than or equal to	x <= 8	true

// const temperature  = 16;

// if (temperature < 19) {
//     console.log("temperature less than 50");
// }else{
//     console.log("tem greater than 50");
// }


// const score = 200;

// if (score > 300) {
//     let power = "Fly"
//     console.log(`user power ${power}`);
// }else{
//     console.log("User power not fly");
// }
// console.log("value of a age " ,age);

// let age = 20;
// console.log("value of a age " ,age);

// const balance = 1000;

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 650) {
//     console.log("less than 650");
// }else{
//     console.log("Less than 1200");
// }


// const isUserLoggendin = true;
// const debitCard = true;


// if (isUserLoggendin && debitCard && 2==2) {

//     console.log("Allow to buy coures");
// }

const loggedinGoogle = false;
const loggedinEmail = false;

if (loggedinGoogle || loggedinEmail ) {
    console.log("Hello user you are login");
}else{
    console.log("You are Not Allow ");
}