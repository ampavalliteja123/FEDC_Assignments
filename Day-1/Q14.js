const fruits = ["Apple","Banana","Cherry"];

//remove the last element
fruits.pop();

// adding orange at index 3(which does not exist)
// will result in undefined

// to add orange to end of the array using push
fruits.push("Orange");

//print updated array
console.log(fruits);