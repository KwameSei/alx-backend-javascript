export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const data = students.reduce((total, student) => student.id + total, 0);
  return data;
}
