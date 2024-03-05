// Hoisting in javascript
function one(){
    const username = "Websites"
    function two(){
        const FulLName = "Singh";
        // console.log(username);
        // console.log(FulLName);
    }
    // console.log(FulLName);
    two()
}

one()




if (true) {
    const username = "Nitin"
    if (username ==="Nitin") {
        const websites = 'delhi'

    //    console.log(`FullName ${username} websites ${websites}`);  
    }
    // console.log(websites);
}

// console.log(username);

// ?????????????????????????????????????????
console.log(Number(9));
function Number(num){
  return num + 1
}


// console.log(AddTwo(7))
 // Expersion Function
const AddTwo = function(num){
    return num + 2
}
