

let emp_detail={
  name: "Atul",
  age:"25",
  location:"haldia",
  hobbies:["coding", "cric", "trvelling"]
};

console.log(emp_detail);

//update sonething
emp_detail.age=30;
console.log(emp_detail.age);


//print only travelling
console.log(emp_detail["hobbies"][2]);

console.log(emp_detail.hobbies[2]);