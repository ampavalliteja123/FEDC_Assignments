const employees = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 },
  ];
  
  function evaluatePerformance(employees) {
    // Step 1: Filter employees who completed more than 5 tasks
    const filteredEmployees = employees.filter(employee => employee.tasksCompleted > 5);
  
    // Step 2: Map filtered employees to an array with name and performance level
    const mappedEmployees = filteredEmployees.map(employee => {
      let performance = "Needs Improvement";
      if (employee.rating > 4.5) {
        performance = "Excellent";
      } else if (employee.rating >= 3 && employee.rating <= 4.5) {
        performance = "Good";
      }
      return { name: employee.name, performance };
    });
  
    // Step 3: Sort the array by performance level in descending order
    const performanceOrder = { "Excellent": 3, "Good": 2, "Needs Improvement": 1 };
    const sortedEmployees = mappedEmployees.sort((a, b) => performanceOrder[b.performance] - performanceOrder[a.performance]);
  
    // Step 4: Return the final sorted array
    return sortedEmployees;
  }
  
  const result = evaluatePerformance(employees);
  console.log(result);
  