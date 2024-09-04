const students = [
    { name: "Beatrice", age: 16, grade: "C" },
    { name: "David", age: 20, grade: "B" },
    { name: "John", age: 20, grade: "B" },
    { name: "Jane", age: 18, grade: "C" },
    { name: "Avril", age: 22, grade: "A" }
];

function filterByGrade(students, grade) {
    return students.filter(student => student.grade === grade);
}


const gradeBStudents = filterByGrade(students, "B");
console.log(gradeBStudents);

function averageAge(students) {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}


const avgAge = averageAge(students);
console.log(avgAge);

