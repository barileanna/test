'use strict';
const mysql = require('mysql');

const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'anna',
  database : 'logistica'
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = conn;