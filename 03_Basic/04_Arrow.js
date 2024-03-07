const user ={
    username: "Nitin",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Rhaul"
// user.welcomeMessage()

// console.log(this);
// function one(){
//     let username = "Nitin Singh"
//     console.log(this.username);
// }

// one()
// const one = function(){
//     let username = "Nitin Singh"
// //     console.log(this.username);
// }


// const two = ()=>{
//     let username = "Nitin";
//     console.log(this.username);
// }
// two()


// const twoAdd = (num1, num2)=>{
//     return num1+ num2
// }

// console.log(twoAdd(2,8));
// difrent way


const addNumber = (num1,num2)=> num1+ num2;
console.log(addNumber(2,8));