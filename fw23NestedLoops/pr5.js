//output 
// 1
// *
// 12
// **
// 123
// ***
// 1234
// ****



// for(let i=1; i<=8; i++){
//   let bg=0;
//   let bag="";
// for(let j=1; j<=8; j++) {
//   bag+="*";

//   for(let z=1; z<=10; z++){
//     bg+= bg+1;
//   }
  
// }
// console.log(bag);
//   console.log(bg);
// }



for(let i=1; i<=4; i++){

  let bag1="";
let bag2="";

for(let j=1; j<=i; j++) {
  bag1 += j + " ";
  bag2 += "*" + " ";
}
console.log(bag1);
console.log(bag2);
}