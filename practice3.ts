/**************************************************************
🏢 Advanced TypeScript Practice: Working with Employees

You are working with a company's internal system to manage employees.

Each employee has:
- id (number)
- name (string)
- department (string)
- salary (number)

Your goal is to write functions that analyze and transform this data.
**************************************************************/

// ✅ Do not change this interface
interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
}

// ✅ Sample data
const employees: Employee[] = [
  { id: 101, name: "Alice", department: "Engineering", salary: 7000 },
  { id: 102, name: "Bob", department: "Marketing", salary: 5000 },
  { id: 103, name: "Charlie", department: "Engineering", salary: 7200 },
  { id: 104, name: "Diana", department: "HR", salary: 4800 },
  { id: 105, name: "Ethan", department: "Marketing", salary: 5300 },
  { id: 106, name: "Fay", department: "Engineering", salary: 6900 },
  { id: 107, name: "George", department: "HR", salary: 5100 },
];

/**************************************************************
✅ Q1) getSortedEmployeesBySalary(department: string):
- Accepts a department name (string)
- Returns an array of employees from that department,
  sorted by salary in descending order
**************************************************************/
function getSortedEmployeesBySalary(department: string): Employee[] {
  return employees
    .filter((employee) => employee.department === department)
    .sort((a, b) => b.salary - a.salary);
}

console.log(getSortedEmployeesBySalary("Engineering"));

/**************************************************************
✅ Q2) promoteEmployee(employeeId: number, amount: number):
- Accepts an employee ID and a raise amount
- Returns a new version of the employee with the updated salary
- If no employee is found, return undefined
**************************************************************/
function promoteEmployee(
  employeeId: number,
  amount: number
): Employee | undefined {
  const employee = employees.find((emp) => emp.id === employeeId);
  if (employee) {
    return { ...employee, salary: employee.salary + amount };
  }
  return undefined;
}

console.log(promoteEmployee(102, 500));

/**************************************************************
✅ Question 3: 🌶️
Create a function `getHighestPaidEmployee` that:
- Accepts an array of employees
- Returns the employee with the highest salary
**************************************************************/
function getHighestPaidEmployee(employees: Employee[]): Employee | undefined {
  return employees.reduce(
    (prev, curr) => (prev.salary > curr.salary ? prev : curr),
    employees[0]
  );
}

console.log(getHighestPaidEmployee(employees)); // Charlie

/**************************************************************
✅ Q4) filterBySalaryRange(min: number, max: number):
- Returns employees whose salaries are within the given range (inclusive)
- Sorted in ascending order of salary
**************************************************************/
function filterBySalaryRange(min: number, max: number): Employee[] {
  return employees
    .filter((employee) => employee.salary >= min && employee.salary <= max)
    .sort((a, b) => a.salary - b.salary);
}

console.log(filterBySalaryRange(5000, 7100));

/**************************************************************
✅ Question 5: 🌶️🌶️🌶️
Create a  `groupEmployeesByDepartment` that:
- Accepts an array of employees
- Returns an object where each key is a department name,
  and the value is an array of employee names in that department

Example output:
{
  Engineering: ["Alice", "Charlie"],
  Marketing: ["Bob", "Ethan"],
  HR: ["Diana"]
}
**************************************************************/
