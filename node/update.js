const updateUser = `UPDATE users SET name = ? WHERE email = ?`;
const values = ["Jane Doe", "john@example.com"];

connection.query(updateUser, values, (err, results) => {
    if (err) throw err;
    console.log("User updated:", results.affectedRows);
});

