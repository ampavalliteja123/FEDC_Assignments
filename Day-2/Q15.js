
function NumberPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        if (j % 3 === 0) {
          continue; // Skip numbers divisible by 3
        }
        if (j % 7 === 0) {
          break; // Stop the pyramid if a number divisible by 7 is encountered
        }
        row += j + " ";
      }
      console.log(row);
    }
  }
  
  const rows = parseInt(prompt("Enter number of rows (1-10):"));
  NumberPyramid(rows); 



