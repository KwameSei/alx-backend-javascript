export default function createReportObject(employeesList) {
    const allEmployees = {};
    for (const departmentName in employeesList) {
      allEmployees[departmentName] = [...employeesList[departmentName]];
    }
  
    const reportObject = {
      allEmployees,
      getNumberOfDepartments() {
        return Object.keys(employeesList).length;
      },
    };
    return reportObject;
  }
  