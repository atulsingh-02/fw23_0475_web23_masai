let char = "character";
let bag="";
for(i=0; i<=char.length; i++){
  if(char[i]=="a" || char[i]=="e" || char[i]=="i" || char[i]=="o" || char[i]=="u"){
    bag+=char[i]
    
  
  }
}
if(bag==""){
  console.log("Not Found");
} else{
  console.log(bag);
}
