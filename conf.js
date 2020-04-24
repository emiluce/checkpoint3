const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'localhost',
  password: '',
  database: 'checkpoint3'
});

connection.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

module.exports = connection; 