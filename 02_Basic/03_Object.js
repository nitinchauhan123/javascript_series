// Singleton object
// object literals

// Object.create

const mysym = Symbol("key1");

const user = {
    name: "Nitin",
   [mysym]:"mykey1",
    "Full name": "Nitin Singh Chauhan",
    age: 26,
    Email: "nitin123@gmail.com",
    location: "Ateli",
    isLoggedin: false,
    LastLoginDays: ["Monday","Saturday"]
}
// console.log(user.LastLoginDays);
// console.log(user["Email"]);
// console.log(user["Full name"]);
// console.log(user["Full name"]);
// console.log( user[mysym]);
user.Email = "chauhan123@gmail.com";

// Object.freeze(user)

user.Email = "chauhan123@gmail.sfgagcom";
// console.log(user);

// user.PartyCode = function(){
//     console.log("hello party code is");
// }
// // console.log(user.PartyCode());
// console.log(user.PartyCode);

user.PartyCode2 = function(){
    console.log(`hello js user ${this.name}`);
}
console.log(user.PartyCode2());