const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// database connection (CREATE ONCE ONLY)
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root123',
    database: 'employeesys',
});

// connect ONCE here
db.connect((err) => {
    if (err) {
        console.log("DB connection failed:");
        console.log(err.message);
    } else {
        console.log('Connected to MySQL database');
    }
});


// CREATE
app.post('/create', (req, res) => {
    const { name, email, age, position, ctc } = req.body;

    db.query(
        'INSERT INTO employee (name, email, age, position, ctc) VALUES (?,?,?,?,?)',
        [name, email, age, position, ctc],
        (err, result) => {
            if (err) {
                console.log('SQL Error:', err);
                return res.status(500).send('Internal Server Error');
            }
            return res.send('values inserted');
        }
    );
});


// READ
app.get('/employees', (req, res) => {
    db.query("SELECT * FROM employee", (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.send(result);
    });
});


// UPDATE
app.put('/update', (req, res) => {
    const { id, ctc } = req.body;

    db.query(
        "UPDATE employee SET ctc = ? WHERE id = ?",
        [ctc, id],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            res.send(result);
        }
    );
});


// DELETE
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    db.query(
        "DELETE FROM employee WHERE id = ?",
        [id],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            res.send(result);
        }
    );
});


// START SERVER
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});