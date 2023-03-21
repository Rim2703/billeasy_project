const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Dept_Emp_DB',
    password: 'admin',
    port: 5432,
})

module.exports = pool