```
const insertUser = `INSERT INTO users (name, email) VALUES (?, ?)`;
const values = ["John Doe", "john@example.com"];

connection.query(insertUser, values, (err, results) => {
    if (err) throw err;
    console.log("User inserted, ID:", results.insertId);
});
```
