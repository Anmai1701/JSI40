const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" }
  ];
  
  const departments = {};
  employees.forEach(emp => {
    if (!departments[emp.department]) {
      departments[emp.department] = [];
    }
    departments[emp.department].push(emp.salary);
  });
  
  const avgSalaryByDepartment = Object.keys(departments).map(dep => {
    const avg =
      departments[dep].reduce((sum, s) => sum + s, 0) / departments[dep].length;
  
    return { department: dep, averageSalary: avg };
  });
  
  console.log("Lương trung bình từng phòng:", avgSalaryByDepartment);
  const result = avgSalaryByDepartment.filter(dep => dep.averageSalary > 65000);
  console.log("Phòng ban lương TB > 65000:", result);
  