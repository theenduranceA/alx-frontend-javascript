export default function createReportObject(employeesList) {
  const allEmployees = {};

  employeesList.forEach((employees, departmentName) => {
    allEmployees[departmentName] = employees;
  });

  const getNumberOfDepartments = () => Object.keys(allEmployees).length;

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
