const pool = require('../../db')
const queries = require('./queries')

// add department api
const addDepartment = async (req, res) => {
    try {
        const { name } = req.body;
        const result = await pool.query(queries.addDept, [name]);
        res.status(201).json("department added successfully")
    } catch (err) {
        res.status(500).json({ status: false, Error: err.message });
    }
}

// add employee api
const createEmployee = async (req, res) => {
    try {
        const { name, email, phone, hire_date, salary, department_id } = req.body;
        const result = await pool.query(queries.addEmployee, [name, email, phone, hire_date, salary, department_id]);
        res.status(201).json("Employee added successfully")

    } catch (err) {
        res.status(500).json({ message: 'Internal server error', Error: err.message });
    }
}

// get api for employee by its id 
const getEmployeeById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(queries.getEmployeeById, [id]);
        res.json(result.rows[0]);
    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error', Error: err.message });
    }
}

// get all the list of employees
const getEmployees = (req, res) => {
    pool.query(queries.getEmployees, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}


module.exports = { getEmployees, getEmployeeById, createEmployee, addDepartment }