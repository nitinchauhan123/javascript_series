// for of loop in javascript


// const Myarr = [0,1,2,3,4,5,6,7,8,9,10];

// for (const Item of Myarr) {
//     console.log(Item);
// }

// const greetings = "Nitin Singh";

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

const map = new Map()
map.set("IN",'India')
map.set("USA",'America')
map.set("Fr",'France')
map.set("IN",'India')

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key,"-",value);
// }

const user = {
    "hello": "Nitin",
    "Age": '23'
};

for (const[ item,value] of user) {
    console.log(item,"-",value);
}
