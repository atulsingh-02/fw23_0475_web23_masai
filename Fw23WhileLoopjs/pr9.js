//Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit

let sum = 0;

let x = 0;

while(x <= 20) {

  if(x % 3 == 0) {

    sum = sum + x;
   
  }
   x++;
}
console.log(sum);