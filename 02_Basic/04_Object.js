const tinderUser = {}
tinderUser.id = '1223',
tinderUser.name = "Nitin",
tinderUser.email = "nitin123@gmail.com";

//  console.log(tinderUser);

const regularUser = {
    email: "Nitin123@gmail.com",
    FullName:{
        userFullName:{
            fristName: "Chauhan",
            lastName: "Rajput" 
        }
    }
}

// console.log(regularUser.FullName?.userFullName.fristName);

const Obj1 = {1:"a",2:"b"};
const Obj2 = {3:"c",4:"d"};

const obj4 = Object.assign({},Obj1,Obj2)
// const obj3 = {...Obj1,...Obj2};
// console.log(obj4);

const users = [
    {
        id:1,
        email:"Nitinchauhan123@gmail.com"
    }
]
// console.log(users[1].email);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));