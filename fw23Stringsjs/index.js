//Problem 1 : Given a string count the number of words in that string

let str = "Yasoda and Nanda Baba are the parents of Krishna";
let count = 0;
for(let i = 0; i <= str.length - 1; i++) {

  if(str[i] == " ") {
    count++;
    
  }
  
}
    if(str[i] != " ") {
      console.log("Number of words are:", count + 1);
    } else {
      console.log("Number of words are", 0);
    }
