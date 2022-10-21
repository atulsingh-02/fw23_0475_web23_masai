//print if the right neighbor is a vowel or not?

let bag="";
let arr="character";
for(i=0; i<arr; i++){
  if(arr[i+1]=="a" || arr[i+1]=="e" || arr[i+1]=="i" || arr[i+1]=="o" || arr[i+1]=="u"){
    bag+=arr[i];
  }
}
if(bag==""){
  console.log("Not found");
} else{
  console.log(bag);
}