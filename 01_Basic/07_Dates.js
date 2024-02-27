// date 1 january 1970 
let date = new Date();


// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toUTCString());

let myCreateDate = new Date('01-27-2024');


// console.log(myCreateDate.toDateString());


// let myTimeStamp = Date.now()

// console.log(myCreateDate.getDate());
// console.log(myCreateDate.getFullYear());


// console.log(myCreateDate.getMilliseconds());


let newDate = new Date()

newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(newDate);