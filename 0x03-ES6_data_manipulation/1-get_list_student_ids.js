const students = [
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  },
  {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  },
  {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  },
];

export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const data = students.map((student) => student.id);
  return data;
}
