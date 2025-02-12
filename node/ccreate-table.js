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
