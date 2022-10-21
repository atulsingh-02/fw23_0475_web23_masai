//Problem 2 : Given an array of string count the overall total number of characters


let arr = "Who was the king or Dwarka";
let sum = 0;


for(let i=0; i<=arr.length-1; i++) {

  sum = sum + arr[i].length;
}
console.log(sum);