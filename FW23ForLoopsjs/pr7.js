//print the sum of those numbers those are divisible by 2 or 5 between the range of 1 and 15


let sum = 0;
for(i=1; i<=15; i++){

  // if(i % 2 ==0 || i % 5 ==0) {

  //   sum += i;

    i % 2 ==0 || i % 5 ==0 ? sum += i : ";"
  
  }
  
}

console.log(sum);
