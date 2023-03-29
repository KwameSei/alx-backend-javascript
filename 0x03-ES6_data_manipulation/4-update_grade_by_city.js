export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      student.grade = 'N/A'; // eslint-disable-line no-param-reassign
      for (const grad of newGrades) {
        if (grad.studentId === student.id) {
          student.grade = grad.grade; // eslint-disable-line no-param-reassign
        }
      }
      return student;
    });
}
