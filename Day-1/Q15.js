// 1. Create an array of student objects
const students = [
    { name: "Alice", age: 20, marks: { math: 85, science: 90, english: 88 } },
    { name: "Bob", age: 21, marks: { math: 75, science: 80, english: 78 } },
    { name: "Charlie", age: 22, marks: { math: 90, science: 95, english: 92 } }
];

// 2. Add a new student object
students.push({ name: "David", age: 20, marks: { math: 80, science: 85, english: 82 } });

// 3. Calculate and display average marks for each student
for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const totalMarks = student.marks.math + student.marks.science + student.marks.english;
    const averageMarks = totalMarks / 3;
    console.log('${student.name}s average marks: ${averageMarks}');
}


// 4. Find and print the student with the highest average marks
let highestAverage = 0;
let topStudent = null;

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const totalMarks = student.marks.math + student.marks.science + student.marks.english;
    const averageMarks = totalMarks / 3;

    if (averageMarks > highestAverage) {
        highestAverage = averageMarks;
        topStudent = student;
    }
}

console.log("The student with the highest average marks is:");
console.log(topStudent);