// budget object
let budget = {
    income : 1000,
    expanses : 700
};

//add new propery 'savings'
budget.savings = budget.income - budget.expanses;

// update income and re calculate savings
budget.income = 1200;
budget.savings = budget.income - budget.expanses;

// print the updated budget
console.log(budget);