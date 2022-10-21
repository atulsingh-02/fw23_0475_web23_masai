//Problem 1 :
//Given an array find the unique items in the array

let names = ["Atul", "Aman", "Sourav", "Sahil", "Kumar","Satyam"];

let new_list = {};

for(let i=0; i<=names.length-1; i++){
  let key = names[i];
  new_list[key] = 1;
}
console.log(new_list);