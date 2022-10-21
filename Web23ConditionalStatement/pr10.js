//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.


//stored username and password
let database_user = "atul@gmail.com";

let database_pass = "add@123";


//input username and password
let user = "atul@gmail.com";
let pass = "add@123";

if (database_user == user){
  
if (database_pass == pass){
  console.log("Logged In");

} else {
  console.log("Wrong Password");
} 
}else {
  console.log("Wrong Username");
}

