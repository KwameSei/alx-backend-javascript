export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const data = students.map((student) => student.id);
  return data;
}
