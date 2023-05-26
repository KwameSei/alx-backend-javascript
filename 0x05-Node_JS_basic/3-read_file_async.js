const fs = require('fs');
const path = require('path');

const countStudents = (doc) => {
  const filePath = path.join(__dirname, doc);

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').slice(1, data.length - 1);
        let count = 0;
        const fields = {};

        for (const line of lines) {
          const [student, , , field] = line.trim().split(',');

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(student);
          count += 1;
        }

        let result = `Number of students: ${count}\n`;

        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            const students = fields[field].join(', ');
            result += `Number of students in ${field}: ${fields[field].length}. List: ${students}\n`;
          }
        }

        resolve(result);
      }
    });
  });
};

module.exports = countStudents;
