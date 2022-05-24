const mysql = require('mysql');

const connectionConfig = {
    
};
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'mystore'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connection establised!')
});

module.exports = connection;