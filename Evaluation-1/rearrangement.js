    function rearrangeFruits(fruits){
        return fruits;
    }
    const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];
    // index          0         1         2         3         4            5          6             7           8       9
        
    // remove last four fruits
    fruits.splice(6,10);
    // the last four elements to add beginning of the array
    fruits.splice(0,0,"Strawberry", "Watermelon", "Peach", "Kiwi");
    console.log(rearrangeFruits(fruits));



   