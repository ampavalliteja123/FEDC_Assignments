// given a object
let book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
  };

  // using For in Loop

  for(let key in book){
    console.log(`${key}: ${book[key]}`);
  }