// for 

// for (let i = 0; i <= 10; i++) {
//     if (i == 5) {
//         console.log("5 is best number");
//     }
//     console.log(i);
    
// }

// for (let i = 1; i < 10; i++) {
//     console.log(`outer loop ${i}`);
//     for (let j = 1; j < 10; j++) {
//         // console.log(`inner loop ${j} and outer loop ${i}`);
//         console.log(i + '*' + j+ " = " + i*j);
//     }
    
// }

// for (let i = 2; i < 10; i++) {
//  console.log(i);
//     for (let j = 2; j < 10; j++) {
//        console.log(i + "*" + j + " =" + i*j);
        
//     }
    
// }

// const MyArr = ['aadi','tinku','vishal','Nidhi'];
// console.log(MyArr.length);
// for (let index = 0; index <= MyArr.length; index++) {
//    const element = MyArr[index];
//    console.log(element);
// }

// break and continue

// for (let index = 1; index <=20; index++) {
//    if (index == 5) {
//       console.log(`Detected 5`);
//       break;
   
//    }
//   console.log(`value of i is ${index}`);
   
// }
for (let index = 1; index <=20; index++) {
   if (index == 5) {
      
      console.log(`Detected 5`);
continue;
   
   }
  console.log(`value of i is ${index}`);
   
}