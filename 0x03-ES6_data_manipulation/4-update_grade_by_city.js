export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  const studentsInCity = students.filter((student) => student.location === city);

  const myStudents = studentsInCity.map((student) => {
    const myGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: myGrade ? myGrade.grade : 'N/A',
    };
  });

  return myStudents;
}
