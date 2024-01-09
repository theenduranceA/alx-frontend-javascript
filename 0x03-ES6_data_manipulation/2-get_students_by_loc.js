export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  const Mystudents = students.filter((student) => student.location === city);
  return Mystudents;
}
