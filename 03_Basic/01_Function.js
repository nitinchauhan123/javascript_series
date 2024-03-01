

function sayMyName(){
    console.log('Hello Nitin');
    console.log('Hello Nitin');
    console.log('Hello Nitin');
    console.log('Hello Nitin');

}
// sayMyName()


// function addNumbers(num1,num2){

// return (num1 + num2);

// // console.log("Hello");
// }

// const result = addNumbers(3,5)

// console.log(result);


// function loginMessage(username){
//     if (!username) {
//         console.log("please enter value");
//      return
//     }
//     return `${username} just login `
// }

// const results = loginMessage();

// console.log(results);


// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// function calculateCartPrice(...num){
//     return num
// }

function  calculateCartPrice(val, val2, ...num){
        return num
}
const CartResults = calculateCartPrice(200,300,400,500);
// CartResults.push(600)
// console.log(CartResults);

const user={
    username:"Nitin",
    price:199
}

// function handleObject(anyobject){
//     return `Username is ${anyobject.username} and price is ${anyobject.price}`
// }

// const results = handleObject(user)
   
// console.log(results);

function objecthandle(anyobject){
console.log(` username is ${anyobject.username} and price is ${anyobject.price}`);
}

objecthandle({
    username:"mohan",
    price:999
})

const myNewArr=[200,300,400,500];

function returnSecondValue(getArray){
    return getArray[0]
}
// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([100,300,500]));