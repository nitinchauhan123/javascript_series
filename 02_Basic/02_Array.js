const marvel_Heros = ['thor','ironmen','loki'];
const bollywood_Hero = ['salmanKhan','sharukkhan','varunDhwan'];


// marvel_Heros.push(bollywood_Hero)
// console.log(marvel_Heros[3][1]);

//  const results = marvel_Heros.concat(bollywood_Hero);
//  console.log(results);



// const AllNewHeros = [...marvel_Heros,...bollywood_Hero];

// console.log(AllNewHeros);

// const another_Array = [1,2,3,[4,5,6,7,[4,5,7]]];

// const real_Another = another_Array.flat(Infinity);
// console.log(real_Another);

console.log(Array.isArray('Nitin'));

console.log(Array.from('singh'));

console.log(Array.from({name:"Nitin"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));