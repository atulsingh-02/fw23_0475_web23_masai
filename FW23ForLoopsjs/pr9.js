//calculate the average of even numbers in a ranger of 1 to 50

let sum = 0;
let count = 0;

for(i=1; i<=50; i++){

  if(i %2 == 0){

    sum += i;
    count++;
  }
  
}

console.log(sum,count);
console.log("The avg is", sum/count);