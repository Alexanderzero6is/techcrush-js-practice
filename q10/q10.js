function summariseStudent(students_1) {
  return students_1.map(student => {
    const grade = gradeScore(student.score);
    return `${student.name} scored ${student.score} - Grade: ${grade}`;
  });
}

function gradeScore(score) {
  if (score >= 70 && score <= 100) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else if (score >= 40) {
    return "D";
  } else {
    return "F";
  }
}

const students = [
  student_1 = {
    name: "Amara",
    score: 88,
  },
  student_2 = {
    name: "Bryan",
    score: 75,
  },
  student_3 = {
    name: "Alexander",
    score: 92,
  },
  student_4 = {
    name: "David",
    score: 67,
  },
  student_5 = {
    name: "Elena",
    score: 54,
  }
];

console.log(summariseStudent(students));