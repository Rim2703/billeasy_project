const pool = require('../../db')
const queries = require('./queries')
const empModel = require('./models/departmentModel')
const deprtModel = require('./models/employeeModel')

const getEmployees = (req, res) => {
    pool.query(queries.getEmployees, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getEmployeeById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.getEmployeeById, [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const createEmployee = (req, res) => {
    const { name, email, phone_number, age } = req.body

    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send('Email already exists');
        }

        pool.query(queries.addEmployee, [name, email, phone_number, age], (error, results) => {
            if (error) throw error;
            res.status(201).json("Employee added successfully")
        })
    })
}

// const createEmployee = async (req, res) => {
//     const { name, email, phone, hire_date, salary, department_id } = req.body;
//     const query = 'INSERT INTO employees (name, email, phone, hire_date, salary, department_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
//     try {
//         const result = await pool.query(query, [name, email, phone, hire_date, salary, department_id]);
//         res.json(result.rows[0]);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

const addDepartment = async (req, res) => {
    const { name } = req.body;
    const query = 'INSERT INTO departments (name) VALUES ($1) RETURNING *';
    pool.query(query, [name], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(201).json(results.rows[0]);
        }
    });
}

const empId = async function (req, res) {
    const emp = await empModel.findOne({
        where: { id: req.params.id },
        include: [{ model: deprtModel }]
    })
}

module.exports = { getEmployees, getEmployeeById, createEmployee, addDepartment, empId }