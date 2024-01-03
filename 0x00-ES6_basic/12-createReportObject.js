export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: employeesList,
    getNumberOfDepartment() {
      return Object.keys(employeesList).length;
    },
  };

  return reportObject;
}
