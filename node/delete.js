const deleteUser = `DELETE FROM users WHERE email = ?`;
const values = ["john@example.com"];

connection.query(deleteUser, values, (err, results) => {
    if (err) throw err;
    console.log("User deleted:", results.affectedRows);
});

