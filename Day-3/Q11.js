// let take a object as book
let book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
  };
  
//using for in loop

for(let object in book){
    console.log(object + ":" + book[object]);
}