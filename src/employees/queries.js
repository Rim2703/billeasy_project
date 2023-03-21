const getEmployees = 'SELECT * FROM employees';
const getEmployeeById = "SELECT * FROM employees WHERE id = $1";
const checkEmailExists = "SELECT e FROM employees e WHERE e.email = $1";
const addEmployee = "INSERT INTO employees (name, email, phone_number, age) VALUES ($1,$2,$3,$4)";
const addDept = "INSERT INTO departments (name) VALUES ($1)";

module.exports = { getEmployees, getEmployeeById, checkEmailExists, addEmployee ,addDept}