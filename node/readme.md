# how to setup mysql with node

## Create Connection

```
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = connection;
```

## Create Table

```
const connection = require('./db');

const createTable = `
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);
`;

connection.query(createTable, (err, results) => {
    if (err) throw err;
    console.log("Users table created");
});
```



> https://www.npmjs.com/package/mysql2

> https://www.npmjs.com/package/dotenv

> https://www.npmjs.com/package/express
