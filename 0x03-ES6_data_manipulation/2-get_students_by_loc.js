export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }
  const data = students.filter((student) => student.location === city);
  return data;
}
