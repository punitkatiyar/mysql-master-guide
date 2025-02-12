const selectUsers = `SELECT * FROM users`;

connection.query(selectUsers, (err, results) => {
    if (err) throw err;
    console.log("Users:", results);
});

