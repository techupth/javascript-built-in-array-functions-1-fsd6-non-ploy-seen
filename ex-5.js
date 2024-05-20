const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(student, currentScore) {
    return student + currentScore.score  / students.length
}

let avarageScore = students.reduce(getAverageStudentScore,0)

console.log(avarageScore)


