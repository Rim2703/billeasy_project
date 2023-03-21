const express = require('express')
const router = express.Router()
const employeeController = require('./controller')

router.get('/employees', employeeController.getEmployees)

router.get('/employees/:id', employeeController.getEmployeeById)

router.post('/addEmployees', employeeController.createEmployee)

router.post('/departments', employeeController.addDepartment)

module.exports = router;