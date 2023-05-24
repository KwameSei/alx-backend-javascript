const fs = require('fs');
const path = require('path');

const countStudents = (doc) => {
  const filePath = path.join(__dirname, doc); // __dirname is the directory name of current module
  try {
    const data = fs.readFileSync(filePath, 'utf8').toString(); // readFileSync is a synchronous version of readFile
    const lines = data.split('\n').slice(1, data.length - 1); // split the data into lines
    let count = 0; // count the number of lines
    const fields = {}; // create an object to store the fields
    for (const i of lines) { // iterate through the lines
      if (i) { // if the line is not empty
        const [student, , , field] = i.trim().split(','); // split the line into columns
        if (!fields[field]) { // if the field is not yet in the fields object
          fields[field] = []; // add the field to the fields object
        }
        fields[field].push(student); // add the student to the field
        count += 1; // increment the number of lines
      }
    }
    console.log(`Number of students: ${count}`); // print the number of lines
    for (const field in fields) { // iterate through the fields
      if (field) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
