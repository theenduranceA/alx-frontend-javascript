export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const sum = students.reduce((accumulator, student) => accumulator + student.id);
  return sum;
}
