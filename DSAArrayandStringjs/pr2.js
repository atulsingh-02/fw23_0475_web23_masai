//given an array find out the number of element for which both the neighbors are greater than the element?
let count=0;
let arr=[5,7,6,9,8,10];

for(let i=1; i<arr.length-1; i++){

if(arr[i]<arr[i-1] && arr[i]<arr[i+1]){
  count+=arr[i]+" ";
}
}
console.log(arr[i]);


