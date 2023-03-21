const getEmployees = 'SELECT * FROM employees';
const getEmployeeById = "SELECT employees.name, employees.email, employees.hire_date, employees.salary, departments.name AS department_name FROM employees JOIN departments ON employees.department_id = departments.id WHERE employees.id = $1";
const checkEmailExists = "SELECT e FROM employees e WHERE e.email = $1";
const addEmployee = "INSERT INTO employees (name, email, phone, hire_date, salary, department_id) VALUES ($1, $2, $3, $4, $5, $6)";
const addDept = "INSERT INTO departments (name) VALUES ($1)";

module.exports = { getEmployees, getEmployeeById, checkEmailExists, addEmployee, addDept }