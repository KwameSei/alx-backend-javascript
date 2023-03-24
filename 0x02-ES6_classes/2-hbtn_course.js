export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // GETTERS
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // SETTERS
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Lenght must be a number');
    }
    this._length = newLength;
  }

  set students(newStudents) {
    newStudents.forEach((element) => {
      if (typeof element !== 'string') {
        throw new TypeError('Students must be an array of string');
      }
    });
    this._students = newStudents;
  }
}
