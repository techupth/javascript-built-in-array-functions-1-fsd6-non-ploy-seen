const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];
console.log(students.length);

function getAverageStudentScore(students) {
  let sum = students.reduce(function (acc, curr) {
    return acc + curr.score;
  }, 0);
  return sum / students.length;
}

console.log(getAverageStudentScore(students)); // Output: 87.5
