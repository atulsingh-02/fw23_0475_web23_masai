// print all the movies except ghajni and pushpa

let arr = ["BATMAN", "RRR", "PUSHPA", "AVENGERS", "GHAJNI"];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

for(let i = 0; i <= arr.length-1; i++) {

  if(arr[i]=="PUSHPA" || arr[i]== "GHAJNI"){
    continue;
  }
  // if(arr[i]=="GHAJNI"){
  //   continue;
  // }

  console.log(arr[i]);
}