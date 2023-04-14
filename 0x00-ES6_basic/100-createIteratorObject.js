export default function createIteratorObject(report) {
    const employees = [];
    for (const departmentName in report.allEmployees) {
      employees.push(...report.allEmployees[departmentName]);
    }
    let currentIndex = 0;
  
    const iterator = {
      next() {
        if (currentIndex < employees.length) {
          const value = employees[currentIndex];
          currentIndex++;
          return { value, done: false };
        } else {
          return { done: true };
        }
      },
    };
  
    return iterator;
  }
  