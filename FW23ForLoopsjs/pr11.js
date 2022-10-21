// Continue:- skip everytihng below me and go back to the starting of the  loop.

// while(condition){

//   continue;
// }

// in while loop my compiler goes back to the condition when we use continue

// but in case of for loop complier will go to the increment or decrement statement

// in case of while compiler goes to condition in case of for goes to inc/dec

for(let i=1; i<=10; i++){

    if( i == 3); {
  continue;
    }
  console.log(i);
}