const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(student, currentScore) {
  // Start coding here
  return student + currentScore.score / students.length;
}

let averageScore = students.reduce(getAverageStudentScore, 0);
console.log(averageScore); // Output: 87.5
