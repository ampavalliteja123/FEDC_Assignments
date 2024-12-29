//The arrow function should use implicit return (no curly braces or return keyword).
//The function should return an object in the format { square, cube }.

const SquareAndCube = num =>({
    square : num*num,
    cube : num*num*num
});

const output = SquareAndCube(6);
console.log(output);
// the output will be {square : 36, cube : 216}