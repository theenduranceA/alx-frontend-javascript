export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments: function (employeesList) {
      return Object.keys(employeesList).length;
    }
  };

  return reportObject;
}
