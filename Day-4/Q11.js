// arrow function with default parameters
const multiply = (a = 1,b = 1) =>{
    return a*b;
}

// example 1 
const outPut1 = multiply(3,4);
console.log(outPut1); // output is 12

// example 2

const output2 = multiply();
console.log(output2); // output is 1