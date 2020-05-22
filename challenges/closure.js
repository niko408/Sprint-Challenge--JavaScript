// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// myFunction executes the code starting from the top and although const internal gets processed, the variable is stored during the execution of the entire codeblock because nestedFunction() needs const internal to run will therefore refer to the scope chain


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation (num){
  let sumArray = [];
  
  for (i = 1; i <= num; i++){
    sumArray.push(i);
  }
  let sum = sumArray.reduce((a, b) =>{
    return a + b;
  }, 0);
  return sum;
}