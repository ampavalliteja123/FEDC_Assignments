function sumNumbers(...args) {
    let sum = 0;
    for (let num of args) {
        sum += num;
    }
    return sum;
}

function collectAndSumNumbers() {
    let validNumbers = [];
    let input;

    while (true) {
        input = prompt("Enter a number (or type 'done' to finish):");
        if (input === 'done'){
            break;
        }

        let number = parseFloat(input);
        if (!isNaN(number)) {
            validNumbers.push(number);
        } else {
            alert("Please enter a valid number.");
        }
    }

    let sum = sumNumbers(...validNumbers);
    alert("The total sum of Numbers: " + sum);
}

collectAndSumNumbers();
