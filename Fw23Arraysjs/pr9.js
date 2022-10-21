// Problem 2 : Given a character in lower case print the upper case character

let char = "j";

let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

for(i=0; i<lower.lenght; i++){
  
 if(char[i] == upper[i]) {
    char = upper[i];
  }
}
console.log(char);